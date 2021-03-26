import { app } from "../src/app";
import request from "supertest";

describe("GET /message - endpoint de mensagens", () => {
  it("deve retornar status 200 e status e as mensagens da fila", async () => {
    const result = await request(app).get("/message");
    expect(result.status).toEqual(200);
    expect(JSON.stringify(result.header)).toMatch(/application\/json/);
  });
});
