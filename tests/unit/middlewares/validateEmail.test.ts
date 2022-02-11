// @ts-nocheck
import { BodyPropertyError } from "errors-stack";
import { validateEmail } from "../../../src/middlewares";
import { error } from "../../../src/services";
import { express } from "../../mocks/express";
import prisma from "../../../src/config/prisma";

jest.mock("../../../src/services/error");
jest.mock("../../../src/config/prisma", () => ({
  subscriptions: {
    findFirst: jest.fn().mockReturnValue(null),
  },
}));

describe("[validateEmail] Test case", () => {
  const { req, res, next } = express;

  it("Should be validate email and return next because email is valid", async () => {
    req.body = { email: "test@example.com" };

    // prisma.subscriptions.findFirst.mockReturnValue(null);

    await validateEmail(req, res, next);

    expect(next).toBeCalledTimes(1);
  });

  it("Should be throw and call error if email is invalid", async () => {
    req.body = { email: "test" };

    error.mockImplementation(() => {});
    await validateEmail(req, res, next);

    expect(error).toBeCalledWith({
      res,
      err: new BodyPropertyError("Body params is invalid!"),
    });
  });
});
