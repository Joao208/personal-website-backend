import { create } from "../../../../src/controllers/emails";
import { express } from "../../../mocks/express";
import * as email from "../../../../src/services/emails";
import { error } from "../../../../src/services";

jest.mock("../../../../src/services/emails");
jest.mock("../../../../src/services/error");

describe("[Emails Create] Test case", () => {
  const { req, res } = express;

  it("Should create email subscription", async () => {
    // @ts-ignore
    email.create.mockImplementation(() => ({ id: "" }));

    // @ts-ignore
    await create(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ id: "" });
  });

  it("Should call error handler if throw new error", async () => {
    // @ts-ignore
    email.create.mockImplementation(() => {
      throw new Error();
    });
    // @ts-ignore
    error.mockImplementation(() => {});

    // @ts-ignore
    await create(req, res);

    expect(error).toBeCalledWith({ res, err: new Error() });
  });
});
