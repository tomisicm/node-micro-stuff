import { sequelize } from '#root/models'
import { Op } from "sequelize"
const uuidv4 = require('uuid')

const { models: { Rating, Book } } = sequelize

export default class SeedRatingsService {
    static async createUserRatings () {
        const ratings = []
        const usersIds = getRandomUserIds(50)

        usersIds.map(async (userId) => {
            const randomBooks = await queryRandomBooks(50)
            const userRatings = await randomBooks.map(rndBook => {
                return {
                    userId: userId,
                    bookId: rndBook.id,
                    categoryId: rndBook.categoryId,
                    value: generateRandomValue()
                }
            })
            // ratings.push(userRatings)
            await Rating.bulkCreate(userRatings)
        })
        // console.log(ratings)
        // await Rating.bulkCreate(ratings)
    }

    static async removeUserRatings () {

    }
}

function getRandomUserIds(size = 4000) {
    let users = []
    for (let i=0; i<size; i+=1) {
      users.push(uuidv4())
    }
    return users
}

function getRandomBookIds(arrLength, largestBookId = 5000) {
    return Array.from({length: arrLength}, () => Math.floor(Math.random() * largestBookId));
}

async function queryRandomBooks (bookArrLength) {
    const ids = getRandomBookIds(bookArrLength)

    return await Book.findAll({
        where: {
            id: ids
        },
        raw: true
    })
}

function generateRandomValue() {
    return Math.floor(Math.random() * 11)
}
