import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import accessEnv from "#root/helpers/accessEnv";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";

import formatGraphQLErrors from "./formatGraphQLErrors";

import isAuthenticated from "#root/middleware/auth/isAuthenticated";

const PORT = accessEnv("PORT", 7000);

const apolloServer = new ApolloServer({
	formatError: formatGraphQLErrors,
	resolvers,
	typeDefs,
	context: ({ req }) => ({ req })
});

const app = express();
app.use(
	cors({
		origin: (origin, cb) => cb(null, true),
		credentials: true
	})
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(isAuthenticated);
apolloServer.applyMiddleware({
	app,
	cors: false,
	path: "/graphql"
});

// TODO
// app.use(function errorHandler(err, req, res, next) {
// 	try {
// 		console.log(err);
// 		return res.status(500).send({ error: err });
// 	} catch (err) {
// 		console.log(err);
// 		return res.status(500).send({ error: err });
// 	}
// });

app.listen(PORT, "0.0.0.0", () => {
	console.info(`api-gateway-service listening on port ${PORT}`);
});
