import { config } from "#root/helpers/config";
import jwt from "jsonwebtoken";

export const newToken = user => {
	return jwt.sign({ id: user.id, email: user.email }, config.secrets.jwt, {
		expiresIn: config.secrets.jwtExp
	});
};

export const verifyToken = token =>
	new Promise((resolve, reject) => {
		jwt.verify(token, config.secrets.jwt, (err, payload) => {
			if (err) return reject(err);
			resolve(payload);
		});
	});
