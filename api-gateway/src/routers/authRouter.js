 
import { Router } from 'express'

import { login } from '#root/middleware/auth/authenticationMiddleware'

const authRouter = Router()

authRouter.route('/login').post(login)

export default authRouter