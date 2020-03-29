import { sequelize } from "#root/models"

const { models } = sequelize

const setupRoutes = app => {
	app.get("/listings", async (req, res, next) => {
		const listings = await models.Listing.findAll({ 
			include: [{
				model: models.ListingBooks,
				as: 'bookIds',
				attributes: [['bookId','id']]
			}]
		});
		return res.json(listings);
	});

	app.get("/listings/:id", async (req, res, next) => {
		try {
			const listing = await models.Listing.findByPk(req.params.id, { 
				include: [
					{
						model: models.ListingBooks,
						as: 'bookIds',
						attributes: [['bookId','id']]
					}
				]
			});
			return res.json(listing);
		} catch (e) {
			return res.json(e);
		}
	});

	app.post("/listings", async (req, res, next) => {
		try {
			const listing = await models.Listing.create(req.body);
			return res.json(listing);
		} catch (e) {
			return res.json(e);
		}
	});

	app.put("/listings/:id", async (req, res, next) => {
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
					fields: ["title", "description"]
				})
				await listing.updateAssociatedBooks(req.body.bookIds)
				return res.json(listing);
			}

			return res.json({});
		} catch (e) {
			console.log(e)
			return res.json(e)
		}
	});

	app.delete("/listings/:id", async (req, res, next) => {
		try {
			const listing = await models.Listing.destroy({
				where: { id: req.params.id }
			})
			if (listing) {
				return res.status(200).json(true);
			} 
			return res.status(404).json(false);
		} catch (e) {
			return res.json(e);
		}
	});

	// app.post("/listings/:id/books", async (req, res, next) => {
	// 	try {
	// 		const book = await models.ListingBooks.create({
	// 			listingId: req.params.id,
	// 			bookId: req.body.bookId
	// 		});
	// 		return res.json(book);
	// 	} catch (e) {
	// 		return res.json(e);
	// 	}
	// });
};

export default setupRoutes;
