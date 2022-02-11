// @ts-nocheck
import { create } from "../../../../src/controllers/posts";
import { express } from "../../../mocks/express";
import * as posts from "../../../../src/services/posts";
import { error } from "../../../../src/services";
import { sendAllRecipients } from "../../../../src/services/communication/sendAllRecipients";

jest.mock("../../../../src/services/posts");
jest.mock("../../../../src/services/error");
jest.mock("../../../../src/services/communication/sendAllRecipients");

describe("[Create Posts] Test case", () => {
  const { req, res } = express;

  it("Should create new post", async () => {
    sendAllRecipients.mockImplementation(() => {});
    posts.create.mockImplementation(() => ({ id: "" }));

    await create(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ id: "" });
  });

  it("Should call error handler if throw new error", async () => {
    sendAllRecipients.mockImplementation(() => {});
    error.mockImplementation(() => {});
    posts.create.mockImplementation(() => {
      throw new Error();
    });

    await create(req, res);

    expect(error).toBeCalledWith({ res, err: new Error() });
  });
});
