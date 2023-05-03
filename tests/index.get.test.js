const app = require("../index")
const request = require("supertest")

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const res = await request(app)
      .get("/")

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe(true)
  })
})
