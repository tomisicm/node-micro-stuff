import { Listing, ListingBooks } from "#root/db/models";

const setupRoutes = app => {
	app.get("/listings", async (req, res, next) => {
		const listings = await Listing.findAll();
		return res.json(listings);
	});

	app.get("/listings/:id", async (req, res, next) => {
		try {
			const listing = await Listing.findByPk(req.params.id, { raw: true });
			
			const listingBooks = await ListingBooks.findAll({
				where: {
					listingId: req.params.id
				},
				attributes: ['bookId'],
				raw: true
			})

			listing.booksIds = listingBooks.map(book => book.bookId)

			return res.json(listing);
		} catch (e) {
			return res.json(e);
		}
	});

	app.post("/listings", async (req, res, next) => {
		try {
			const listing = await Listing.create(req.body);
			return res.json(listing);
		} catch (e) {
			return res.json(e);
		}
	});

	app.put("/listings/:id", async (req, res, next) => {
		try {
			const listing = await Listing.findByPk(req.params.id);

			if (listing) {
				listing.title = req.body.title;
				listing.description = req.body.description;
				await listing.save({
					fields: ["title", "description"]
				});
				return res.json(listing);
			}

			return res.json({});
		} catch (e) {
			return res.json(e);
		}
	});

	app.delete("/listings/:id", async (req, res, next) => {
		try {
			const listing = await Listing.destroy({
				where: { id: req.params.id }
			}).then(function(deletedRecord) {
				if (deletedRecord === 1) {
					return res.status(200).json(true);
				} else {
					return res.status(404).json(false);
				}
			});
		} catch (e) {
			return res.json(e);
		}
	});
};

export default setupRoutes;
