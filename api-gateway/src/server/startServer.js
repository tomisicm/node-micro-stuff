import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import accessEnv from "#root/helpers/accessEnv";
import schema from "#root/graphql"

import isAuthenticated from "#root/middleware/auth/isAuthenticated";
import formatGraphQLErrors from "#root/server/formatGraphQLErrors";
import { createLoaders } from "#root/graphql/dataloaders"

const PORT = accessEnv("PORT", 7000);

const apolloServer = new ApolloServer({
	formatError: formatGraphQLErrors,
	schema: schema,
	context: ({ req }) => ({
		user: req.user,
		loaders: createLoaders(req)
	})
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

app.listen(PORT, "0.0.0.0", () => {
	console.info(`api-gateway-service listening on port ${PORT}`);
});
