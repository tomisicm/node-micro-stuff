// import RatingsService from '#root/services/ratings-service'
import MatricesService from '#root/services/data/matrices-service'

import importDataRouter from '../routers/import-data-jobs'
import booksRouter from '../routers/books'

// TODO this puppy should collect all routes
const setupRoutes = app => {

	app.use('/api/', booksRouter)
	app.use('/api/', importDataRouter)

	// app.post('/categories-recalculate', async (req, res, next) => {
	// 	MatricesService.getRatingMatrixData()

	// 	return res.status(200).json(true)
	// })
}

export default setupRoutes
