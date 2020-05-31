import { Application, Request, Response } from 'express'
import sequelize from './../db/connection'

const { models } = sequelize


const setupRoutes = (app: Application):void => {
	app.get('/listings', async (req: Request, res: Response) => {
		try {
			const listings = await models.Listing.findAll({ 
				include: [
					{
						model: models.ListingBooks,
						as: 'bookIds',
						attributes: [['bookId','id']]
					}
				]
			})
			return res.json(listings)
		} catch(e) {
			return res.json(e)
		}

	})

	app.get('/listings/:id', async (req: Request, res: Response) => {
		try {
			const listing = await models.Listing.findByPk(req.params.id, { 
				include: [
					{
						model: models.ListingBooks,
						as: 'bookIds',
						attributes: [['bookId','id']]
					}
				]
			})

			return res.json(listing)
		} catch (e) {
			return res.json(e)
		}
	})

	app.post('/listings', async (req: Request, res: Response) => {
		try {
			const listing = await models.Listing.create(req.body)
			return res.json(listing)
		} catch (e) {
			return res.json(e)
		}
	})

	app.put('/listings/:id', async (req: Request, res: Response) => {
		try {
			const listing = await models.Listing.findByPk(req.params.id, { 
				include: [
					{
						model: models.ListingBooks,
						as: 'bookIds',
						attributes: [['bookId','id']]
					}
				]
			})

			if (listing) {
				listing.title = req.body.title
				listing.description = req.body.description
				await listing.save({
					fields: ['title', 'description']
				})
				await listing.updateAssociatedBooks(req.body.bookIds)
				return res.json(listing)
			}

			return res.json({})
		} catch (e) {
			console.log(e)
			return res.json(e)
		}
	})

	app.delete('/listings/:id', async (req: Request, res: Response) => {
		try {
			const listing = await models.Listing.destroy({
				where: { id: req.params.id }
			})
			if (listing) {
				return res.status(200).json(true)
			} 
			return res.status(404).json(false)
		} catch (e) {
			return res.json(e)
		}
	})
}

export default setupRoutes
