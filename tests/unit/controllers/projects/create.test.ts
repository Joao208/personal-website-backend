import { create } from "../../../../src/controllers/projects";
import { express } from "../../../mocks/express";
import * as projects from "../../../../src/services/projects";
import { error } from "../../../../src/services";

jest.mock("../../../../src/services/projects");
jest.mock("../../../../src/services/error");

describe("[Create Projects] Test case", () => {
  const { req, res } = express;

  it("Should create new project", async () => {
    // @ts-ignore
    projects.create.mockImplementation(() => ({ id: "" }));
    // @ts-ignore
    await create(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ id: "" });
  });

  it("Should call error handler if throw new error", async () => {
    // @ts-ignore
    error.mockImplementation(() => {});
    // @ts-ignore
    projects.create.mockImplementation(() => {
      throw new Error();
    });
    // @ts-ignore
    await create(req, res);

    expect(error).toBeCalledWith({ res, err: new Error() });
  });
});
