const request = require("supertest")
const app = require("../app")

describe("Get /api/movies", () => {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/movies")

        expect(response.headers["content-type"]).toMatch(/json/)
        expect(response.status).toEqual(200)
    });
});

describe("Get /api/movies/:id", () => {
    it("should return the film with the movie asked", async () => {
        const response = await request(app).get("/api/movies/1")

        expect(response.headers["content-type"]).toMatch(/json/)
        expect(response.status).toEqual(200)
    });
});