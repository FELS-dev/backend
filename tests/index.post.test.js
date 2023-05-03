const app = require("../index")
const request = require("supertest")

describe("Test the root post path", () => {
  test("It should response the POST method", async () => {
    const res = await request(app)
      .post("/")
      .send({
        key: "value"
      })

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe(true)
  })
})
