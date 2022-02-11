import { get } from "../../../../src/controllers/posts";
import { express } from "../../../mocks/express";
import * as posts from "../../../../src/services/posts";
import { error } from "../../../../src/services";

jest.mock("../../../../src/services/posts");
jest.mock("../../../../src/services/error");

describe("[Get Posts] Test case", () => {
  const { req, res } = express;

  it("Should get posts", async () => {
    // @ts-ignore
    posts.get.mockImplementation(() => []);
    // @ts-ignore
    await get(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith([]);
  });

  it("Should call error handler if throw new error", async () => {
    // @ts-ignore
    error.mockImplementation(() => {});
    // @ts-ignore
    posts.get.mockImplementation(() => {
      throw new Error();
    });
    // @ts-ignore
    await get(req, res);

    expect(error).toBeCalledWith({ res, err: new Error() });
  });
});
