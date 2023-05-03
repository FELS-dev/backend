const app = require("../index")
const request = require("supertest")

describe("Test the root post path with fail validation", () => {
  it("It should response the POST method with failed validation", async () => {
    const res = await request(app)
      .post("/")
      .send({
        ky: "value"
      })

    expect(res.statusCode).toBe(406)
    expect(res.body.status).toBe(false)
  })
})
