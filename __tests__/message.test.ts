import { app } from "../src/app";
import request from "supertest";

describe("GET /message - endpoint to find messages", () => {
  it("should return code status 200 and get messages in queue", async () => {
    const result = await request(app).get("/message");
    expect(result.status).toEqual(200);
    expect(JSON.stringify(result.header)).toMatch(/application\/json/);
  });
});

describe("POST /message - endpoint de to add new message", () => {
  it("should add new message in queue", async () => {
    const result = await request(app)
      .post("/message")
      .send({ message: "is just a test" });
    expect(result.status).toEqual(200);
    expect(JSON.stringify(result.header)).toMatch(/application\/json/);
  });

  it("should fail when invalid paramenters are passed", async () => {
    const result = await request(app)
      .post("/message")
      .send({ invalid: "is just a test" });
    expect(result.status).toEqual(400);
    expect(JSON.stringify(result.header)).toMatch(/application\/json/);
  });
});
