import { Book } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";

const setupRoutes = app => {
	app.post("/books", async (req, res, next) => {
		const { ids } = req.body
		try {
			const books = await Book.findAll({
				where: {
					id: ids
				},
				raw: true
			})
			return res.json(books)
		} catch (e) {
			return res.json(e);
		}
	});

	app.get("/books/all", async (req, res, next) => {
		const books = await Book.findAll();
		return res.json(books);
	});

	app.get("/book/:id", async (req, res, next) => {
		try {
			const book = await Book.findByPk(req.params.id);
			return res.json(book);
		} catch (e) {
			return res.json(e);
		}
	});

	app.post("/book", async (req, res, next) => {
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

	app.put("/book/:id", async (req, res, next) => {
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

	app.delete("/book/:id", async (req, res, next) => {
		try {
			const book = await Book.destroy({
				where: { id: req.params.id }
			})
			if (book) {
				return res.status(200).json(true);
			} 
			return res.status(404).json(false);
		} catch (e) {
			return res.json(e);
		}
	});
};

export default setupRoutes;
