const request = require("supertest");
const app = require("../server.js");
describe("GET /", function () {
  it('displays "Hello World! La somme est de 12"', function (done) {
    // The line below is the core test of our app.
    request(app).get("/").expect("Hello World! La somme est de 12", done);
  });
});
