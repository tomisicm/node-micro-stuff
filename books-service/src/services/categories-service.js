import { sequelize } from '#root/models'
import { Op } from "sequelize"

const { models: { Book, Category, CategoryMetadata } } = sequelize

export default class CategoriesService {
    static async initializeCategoriesFrequencies() {
        try {
            const bookCounts = await Category
                .findAll({ attributes: ['id'], raw: true })
                .map(async (category) => {
                    return {
                        categoryId: category.id,
                        totalCount: await getBooksCount({ categoryId: category.id })
                    }
                })

            const totalBooks = bookCounts
                .map(bookOb => bookOb.totalCount)
                .reduce((acc, currentVal) => { return acc + currentVal })
                
            bookCounts.forEach(category => {
                category.relativeFrequency = category.totalCount / totalBooks
            })

            const categoryMetadata = await CategoryMetadata.bulkCreate(bookCounts)

            console.log(categoryMetadata)
        } catch (e) {
            console.error(e)
        }
    }

    static async updateCategoriesFrequencies(prevCount) {
        try {

            const newlyAddedBooks = await getBooksCount({ id: { [Op.gt]: prevCount } })
            const newTotalBooks = prevCount + newlyAddedBooks

            // console.log(newTotalBooks)

            const bookCounts = await CategoryMetadata
                .findAll({ raw: true })
                .map(async (category) => {
                    return {
                        categoryId: category.categoryId,
                        totalCount: await updateTotalBookCount(category.totalCount,
                            { categoryId: category.categoryId, id: { [Op.gt]: prevCount } }
                        ),
                        relativeFrequency: category.relativeFrequency
                    }
                }).map((category) => {
                    return {
                        categoryId: category.categoryId,
                        totalCount: category.totalCount,
                        relativeFrequency: (category.totalCount / newTotalBooks ) 
                    }
                })

            // const categoryMetadata = await CategoryMetadata.bulkCreate(bookCounts)

            console.log(bookCounts)
        } catch (e) {
            console.error(e)
        }
    }
}

async function updateTotalBookCount(prevCount, query) {
    return prevCount + await getBooksCount(query)
}

async function getBooksCount(query) {
    return await Book.count({
        where: query
    })
}