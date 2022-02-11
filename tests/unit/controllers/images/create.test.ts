// @ts-nocheck
import { create } from "../../../../src/controllers/images";
import { express } from "../../../mocks/express";

describe("[Image Create] Test case", () => {
  it("Should create and return image", async () => {
    const { req, res } = express;

    req.file = {
      url: "http://localhost:3000/images/test.jpg",
    };

    await create(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(req.file);
  });
});
