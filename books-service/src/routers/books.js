import { Router } from 'express'
import { sequelize } from '#root/models'
import generateUUID from '#root/helpers/generateUUID'
import { sendToBookJobQueue } from '#root/server/events-service'
import SearchBookService from '#root/services/search-books-servce'
import RecommendationBookService from '#root/services/recommendation-books-service'

const { models: { Book } } = sequelize

const router = Router()

router.route('/books/search').post(async (req, res, next) => {
    const data = SearchBookService.searchByString(req.body)
    return res.json({ books: data })
})

router.route('/books/recommendation').post(async (req, res, next) => {
    const data = await RecommendationBookService.getBooks(req.body)
    return res.json({ recommended: data })
})

router.route('/books/some').post(async (req, res, next) => {
    const { ids } = req.body
    try {
        const books = await Book.findAll({
            where: {
                id: ids
            },
            raw: true
        })
        return res.json(books)
    } catch (e) {
        return res.json(e)
    }
})

router.route('/books/all').get(async (req, res, next) => {
    const books = await Book.findAll()
    return res.json(books)
})

router.route('/books/:id').get(async (req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id)
        return res.json(book)
    } catch (e) {
        return res.json(e)
    }
})

router.route('/books').post(async (req, res, next) => {
    try {
        const book = await Book.create({
            ...req.body,
            id: generateUUID()
          })
        return res.json(book)
    } catch (e) {
        return res.json(e)
    }
})

router.route('/books/:id').put(async (req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id)

        if (book) {
            book.title = req.body.title
            book.description = req.body.description
            await book.save({
                fields: ['title', 'author']
            })
            return res.json(book)
        }

        return res.json({})
    } catch (e) {
        return res.json(e)
    }
})

router.route('/books/:id').delete(async (req, res, next) => {
    try {
        const book = await Book.destroy({
            where: { id: req.params.id }
        })

        const msg = {
            id: req.params.id,
            event: 'destroy'
        }

        if (book) {
            sendToBookJobQueue(msg)
            return res.status(200).json(true)
        }
        return res.status(404).json(false)
    } catch (e) {
        return res.json(e)
    }
})

export default router
