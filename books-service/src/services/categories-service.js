import { sequelize } from '#root/models'

const { models: { Book, Category } } = sequelize

export default class CategoriesService {
    static async initializeCategoriesFrequencies() {
        try {
            const bookCounts = await Category
                .findAll({ attributes: ['id'], raw: true })
                .map(async (category) => {
                    return {
                        categoryId: category.id,
                        count: await getBooksCount(category.id)
                    }
                })

            const totalBooks = bookCounts
                .map(bookOb => bookOb.count)
                .reduce((acc, currentVal) => { return acc + currentVal })

            console.log(totalBooks)
            console.log(bookCounts)
            
        } catch (e) {
            console.error(e)
        }
    }
}

async function getBooksCount(categoryId) {
    if (typeof categoryId !== 'string') {
        categoryId = categoryId.toString()
    } 
    return await Book.count({ where: { 'categoryId': categoryId } })
}