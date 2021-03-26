import express from "express";
import { routerRegister } from "./routeRegister";
const app = express();

app.use(express.json());

app.use(routerRegister);

app.use((req, res, next) => {
  res.status(404).send({ error: "page not found" });
});
export { app };
