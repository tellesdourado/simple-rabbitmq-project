import { config } from "dotenv";
import { app } from "./app";
config();

const server_port = process.env.PORT ? process.env.PORT : 80;

app.listen(server_port, () => {
  console.info(`server is running on port: ${server_port}`);
});
