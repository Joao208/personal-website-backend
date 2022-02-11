import { UnauthorizedError } from "errors-stack";
import { requireToken } from "../../../src/middlewares";
import { error } from "../../../src/services";
import { express } from "../../mocks/express";

jest.mock("../../../src/services/error");

describe("[requireToken] Test case", () => {
  const { req, res, next } = express;

  it("Should test require token middleware with success and call next", async () => {
    req.headers = { authorization: process.env.AUTH_TOKEN };

    // @ts-ignore
    await requireToken(req, res, next);

    expect(next).toBeCalledTimes(1);
  });

  it("Should throw and call error if token is invalid", async () => {
    req.headers = { authorization: null };

    // @ts-ignore
    error.mockImplementation(() => {});

    // @ts-ignore
    await requireToken(req, res, next);

    expect(error).toBeCalledWith({
      res,
      err: new UnauthorizedError({ message: "Token invalid", status: 401 }),
    });
  });
});
