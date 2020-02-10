import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from 'body-parser';
import express from "express";
import accessEnv from "#root/helpers/accessEnv";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";

import formatGraphQLErrors from "./formatGraphQLErrors";

import { authenticationMiddleware } from "#root/middleware/auth/authenticationMiddleware";
import authRouter from '#root/routers/authRouter'

const PORT = accessEnv("PORT", 7000);

const apolloServer = new ApolloServer({
  formatError: formatGraphQLErrors,
  resolvers,
  typeDefs
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

app.use(authRouter);
app.use("/api", authenticationMiddleware);

apolloServer.applyMiddleware({
  app,
  cors: false,
  path: "/graphql"
});

app.use("/api", (req, res) => {
  return res.json('I passed authorization!');
});

app.listen(PORT, "0.0.0.0", () => {
  console.info(`api-gateway-service listening on port ${PORT}`);
});
