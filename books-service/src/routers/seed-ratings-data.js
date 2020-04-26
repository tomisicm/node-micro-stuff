import { Router } from 'express'
import sequelize from '#root/db/connection'
import SeedRatings from '#root/services/seed-ratings'

const router = Router()

router.route('/seed-ratings').post(async (req, res, next) => {
   await SeedRatings.createUserRatings()

   return res.json({ status: 'seeding completed' })
})

router.route('/delete-ratings').post(async (req, res, next) => {
    console.log(SeedRatings)

    return res.json({ 1: 'ok' })
 })

export default router