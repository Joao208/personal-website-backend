import { get } from "../../../../src/controllers/projects";
import { express } from "../../../mocks/express";
import * as projects from "../../../../src/services/projects";
import { error } from "../../../../src/services";

jest.mock("../../../../src/services/projects");
jest.mock("../../../../src/services/error");

describe("[Get Projects] Test case", () => {
  const { req, res } = express;

  it("Should get projects", async () => {
    // @ts-ignore
    projects.get.mockImplementation(() => []);
    // @ts-ignore
    await get(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith([]);
  });

  it("Should call error handler if throw new error", async () => {
    // @ts-ignore
    error.mockImplementation(() => {});
    // @ts-ignore
    projects.get.mockImplementation(() => {
      throw new Error();
    });
    // @ts-ignore
    await get(req, res);

    expect(error).toBeCalledWith({ res, err: new Error() });
  });
});
