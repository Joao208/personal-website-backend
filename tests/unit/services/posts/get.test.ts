import * as posts from "../../../../src/services/posts";

jest.mock("../../../../src/config/prisma", () => ({
  post: {
    findUnique: jest.fn().mockReturnValue({ id: "" }),
    findMany: jest.fn().mockReturnValue([{ id: "" }]),
  },
}));

describe("[Post get service] Test case", () => {
  it("Should get post by id", async () => {
    const response = await posts.get({ pageId: "id" });

    expect(response).toStrictEqual({ id: "" });
  });

  it("Should get all posts", async () => {
    const response = await posts.get({ pageId: "" });

    expect(response).toStrictEqual([{ id: "" }]);
  });
});
