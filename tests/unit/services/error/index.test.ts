import { error } from "../../../../src/services";
import { express } from "../../../mocks/express";

describe("[Error] Test case", () => {
  it("Should be call res status and log", () => {
    const { res } = express;

    // @ts-ignore
    error({ res, err: new Error("Mocked error") });

    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith("Mocked error");
  });
});
