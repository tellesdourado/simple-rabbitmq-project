import { app, server_port } from "./app";

app.listen(server_port, () => {
  console.info(`server is running on port: ${server_port}`);
});
