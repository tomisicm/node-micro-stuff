import { User } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import comparePassword from "#root/helpers/comparePassword";
import { newToken } from "#root/helpers/token";
import { config } from "#root/helpers/config";

export default class UserService {
	static async createUser({ email, password }) {
		try {
			const newUser = await User.create({
				email: email,
				id: generateUUID(),
				passwordHash: hashPassword(password)
			});
			return newUser;
		} catch (e) {
			console.error(e);
			throw e;
		}
	}

	static async loginUser({ email, password }) {
		let user;

		try {
			user = await User.findOne({
				where: {
					email: email
				},
				raw: true
			});
			if (!user) {
				throw new Error("email and password combination does not exist!");
			}

			const match = await comparePassword(password, user.passwordHash);
			if (!match) {
				throw new Error("email and password combination does not exist!");
			}

			const token = newToken(user);

			return {
				id: user.id,
				token: token,
				expiresIn: config.secrets.jwtExp
			};
		} catch (e) {
			console.error(e);
			throw e;
		}
	}

	static async fetchUserById(id) {
		try {
			const user = await User.findByPk(id, {
				attributes: ["id", "email"],
				raw: true
			});
			return user;
		} catch (e) {
			console.log(e);
			throw e;
		}
	}

	static async fetchUsersById(_, ids) {
		try {
			return ids.map(id => User.findByPk(id, {
				attributes: ["id", "email"],
				raw: true
			}));
		} catch (e) {
			throw e;
		}
	}
}
