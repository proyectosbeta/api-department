import { Helper } from "./helpers/helpers";

const helper = new Helper();

describe("Test /api", () => {
  test("It should response the GET method /api with language default (es-PY)", async (done) => {
    const response = await helper.apiServer.get("/api");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      "Bienvenido al API REST (api department)"
    );

    done();
  });

  test("It should response the GET method /api with english language (en)", async (done) => {
    const response = await helper.apiServer
      .get("/api")
      .set("Accept-Language", "en-US");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Welcome to the API REST (api department)");

    done();
  });
});
