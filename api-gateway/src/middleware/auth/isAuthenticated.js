import { verifyToken } from "#root/helpers/token";
import { User } from "#root/db/models";

module.exports = async (req, res, next) => {
	const bearer = req.get("Authorization");

	if (bearer && bearer.startsWith("Bearer ")) {
		const token = bearer.split("Bearer ")[1].trim();
		let payload;

		try {
			payload = await verifyToken(token);

			if (payload) {
				await User.findByPk( payload.id, {
					attributes: ["id", "email", "createdAt"],
					raw: true
				}).then( user => {
					req.user = user;
				});
			}
		} catch (e) {
			// console.log(e);
		}
	}

	next();
};
