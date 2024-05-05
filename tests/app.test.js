const app = require("../app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint", () => {
    console.log("ppp")
    it("gets the test endpoint", async () => {
        const response = await request.get("/test");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("pass!");
    })
})

it("Testing to see if Jest works", () => {
    expect(1).toBe(1);
});