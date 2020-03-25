import { Book } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";

const setupRoutes = app => {
    app.get("/books", async (req, res, next) => {
		const books = await Book.findAll();
		return res.json(books);
	});

	app.get("/books/:id", async (req, res, next) => {
		try {
			const book = await Book.findByPk(req.params.id);
			return res.json(book);
		} catch (e) {
			return res.json(e);
		}
	});

	app.post("/books", async (req, res, next) => {
		try {
			const book = await Book.create({
        ...req.body,
        id: generateUUID()
      });
			return res.json(book);
		} catch (e) {
			return res.json(e);
		}
	});

	app.put("/books/:id", async (req, res, next) => {
		try {
			const book = await Book.findByPk(req.params.id);

			console.log(req)

			if (book) {
				book.title = req.body.title;
				book.description = req.body.description;
				await book.save({
					fields: ["title", "author"]
				});
				return res.json(book);
			}

			return res.json({});
		} catch (e) {
			return res.json(e);
		}
	});

	app.delete("/books/:id", async (req, res, next) => {
		try {
			await Book.destroy({
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
