import { Router } from 'express'
import sequelize from '#root/db/connection'

import importData from '#root/helpers/importData'


const router = Router()

router.route('/import-books').post(async (req, res, next) => {

//    importData(5)

   return res.json(1)
})

router.route('/delete-books').post(async (req, res, next) => {
    try {
        // console.log(sequelizequeryInterface.dropTable('books'))

        const deletion = await sequelize.models.Book.destroy({ truncate: false })
        return res.json({job: deletion})
    } catch (e) {
        console.log(e)
        return res.json(e)
    }
})

export default router
