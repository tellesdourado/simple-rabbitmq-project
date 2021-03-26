import { Router } from "express";
const routerRegister = Router();

import fs from "fs";
import path from "path";

const routeFolder = path.join(__dirname, "routes");

fs.readdirSync(routeFolder).forEach((file: string) => {
  routerRegister.use(require(`./routes/${file}`).router);
});

export { routerRegister };
