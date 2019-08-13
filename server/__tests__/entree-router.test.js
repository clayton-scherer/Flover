const request = require("supertest");
const Entree = require("../models/entree");
const app = require("../app");

jest.mock("../models/entree", () => {
  return {
    create: jest.fn(() => {}),
    find: jest.fn(() => {})
  };
});

describe("Entree Router", () => {
  describe("create Entree route", () => {
    test("should get a 200 status and call 'Entree.create()' and 'Entree.find()' one(1) time each", done => {
      request(app)
        .post("/api/entrees/")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Entree.create.mock.calls.length).toEqual(1);
          expect(Entree.find.mock.calls.length).toEqual(1);
          done();
        });
      Entree.find.mockReset();
      Entree.create.mockReset();
    });
  });

  describe("read Entrees route", () => {
    test("should get a 200 status and call 'Entree.find()' one(1) time", done => {
      request(app)
        .post("/api/entrees/")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Entree.find.mock.calls.length).toEqual(1);
          done();
        });
      Entree.find.mockReset();
    });
  });
});
