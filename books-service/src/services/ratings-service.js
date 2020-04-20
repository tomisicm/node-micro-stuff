import { sequelize } from '#root/models'
import { Op } from "sequelize"

const { models: { Rating, Category, CategoryMetadata } } = sequelize

export default class RatingsService {
    static async getUserRatings(userId) {
        try {
            return await Rating.findAll({
                where: {
                    userId: userId,
                },
                raw: true 
            })
        } catch (e) {
            console.error(e)
        }
    }

    static async getCategoryBooks(categoryId) {
        try {
            return await Books.findAll({
                where: {
                    categoryId: categoryId
                },
                raw: true 
            })
        } catch (e) {
            console.error(e)
        }
    }

    static async getBookRatings(bookId) {
        try {
            return await Rating.findAll({
                where: {
                    bookId: bookId
                },
                raw: true 
            })
        } catch (e) {
            console.error(e)
        }
    }

    // TODO
    static getArrayVector(inputArr) {
        return inputArr
    }
}

