import { BodyPropertyError } from "errors-stack";
import { validatePosts } from "../../../src/middlewares";
import { error } from "../../../src/services";
import { express } from "../../mocks/express";

jest.mock("../../../src/services/error");

describe("[validatePosts] Test case", () => {
  const { req, res, next } = express;

  it("Should be validate posts body", async () => {
    req.body = {
      title: "Test",
      description: "Test",
      markdown: "Test",
      subtitle: "Test",
      cover: "https://localhost:5000",
    };

    // @ts-ignore
    await validatePosts(req, res, next);

    expect(next).toBeCalledTimes(1);
  });

  it("Should be call and throw new error if body params is invalid", async () => {
    req.body = {
      title: "Test",
    };

    // @ts-ignore
    error.mockImplementation(() => {});
    // @ts-ignore
    await validatePosts(req, res, next);

    expect(error).toBeCalledWith({
      res,
      err: new BodyPropertyError("Body params is invalid!"),
    });
  });
});
