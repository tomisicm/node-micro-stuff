import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import accessEnv from '#root/helpers/accessEnv'

import { connectAndListen } from './events-service'
import setupRoutes from './routes'

const PORT = accessEnv('PORT', 7100)

const app: express.Application = express()

app.use(bodyParser.json())

app.use(
	cors({
		origin: (origin, cb) => cb(null, true),
		credentials: true
	})
)

setupRoutes(app)

app.listen(PORT, '0.0.0.0', async () => {
	await connectAndListen()
	console.log(`Listing service listening on port ${PORT}`)
})
