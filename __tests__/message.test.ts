import { app } from "../src/app";
import request from "supertest";

describe("GET /message - endpoint de busca mensagens", () => {
  it("deve retornar status 200 e status e as mensagens da fila", async () => {
    const result = await request(app).get("/message");
    expect(result.status).toEqual(200);
    expect(JSON.stringify(result.header)).toMatch(/application\/json/);
  });
});

describe("POST /message - endpoint de adição de mensagens", () => {
  it("deve adicionar uma mensagem na fila", async () => {
    const result = await request(app)
      .post("/message")
      .send({ message: "é um test" });
    expect(result.status).toEqual(200);
    expect(JSON.stringify(result.header)).toMatch(/application\/json/);
  });
});
