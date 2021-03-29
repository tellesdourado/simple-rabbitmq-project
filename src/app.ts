import express from "express";
import { config } from "dotenv";
import { routerRegister } from "./routeRegister";
import { serve, setup, SwaggerUiOptions } from "swagger-ui-express";
import doc from "../swagger/doc.json";
config();
const app = express();

app.use(express.json());

app.use(routerRegister);

// ################### API DOCS ######################

const options: SwaggerUiOptions = {
  explorer: true,
};

app.use("/docs", serve, setup(doc, options));

// ############### NOT FOUND ROUTES #####################
app.use((req, res, next) => {
  res.status(404).send({ error: "page not found" });
});

const server_port = process.env.PORT ? process.env.PORT : 80;

export { app, server_port };
