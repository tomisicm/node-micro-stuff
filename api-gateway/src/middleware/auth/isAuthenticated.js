import { verifyToken } from "#root/helpers/token";
import { User } from "#root/db/models";

module.exports = async (req, res, next) => {
	const bearer = req.get("Authorization");
	req.isAuth = false;

	if (bearer && bearer.startsWith("Bearer ")) {
		const token = bearer.split("Bearer ")[1].trim();
		let payload;

		try {
			payload = await verifyToken(token);

			if (payload) {
				await User.findByPk(payload.id).then(function(user) {
					req.user = user.dataValues;
					req.isAuth = true;
				});
			}
		} catch (e) {
			// console.log(e);
		}
	}

	next();
};
