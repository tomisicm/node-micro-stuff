import { sequelize } from '#root/models'

const { models: { Book, Category, CategoryMetadata } } = sequelize

export default class CategoriesService {
    static async initializeCategoriesFrequencies() {
        try {
            const bookCounts = await Category
                .findAll({ attributes: ['id'], raw: true })
                .map(async (category) => {
                    return {
                        categoryId: category.id,
                        totalCount: await getBooksCount(category.id)
                    }
                })

            const totalBooks = bookCounts
                .map(bookOb => bookOb.totalCount)
                .reduce((acc, currentVal) => { return acc + currentVal })
                
            bookCounts.forEach(book => {
                book.relativeFrequency = book.totalCount / totalBooks
            })

            const categoryMetadata = await CategoryMetadata.bulkCreate(bookCounts)

            console.log(categoryMetadata)
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