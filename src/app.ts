import express from "express";
import { config } from "dotenv";
import { routerRegister } from "./routeRegister";
config();
const app = express();

app.use(express.json());

app.use(routerRegister);

app.use((req, res, next) => {
  res.status(404).send({ error: "page not found" });
});

const server_port = process.env.PORT ? process.env.PORT : 80;

export { app, server_port };
