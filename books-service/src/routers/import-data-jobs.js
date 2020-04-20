import { Router } from 'express'


const router = Router()

router.route('/import-books').post((req, res, next) => {

    return res.json({
        cock: 'cock'
    })
})

export default router
