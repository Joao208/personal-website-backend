import * as posts from "../../../../src/services/posts";

describe("[Post get service] Test case", () => {
  it("Should get post by id", async () => {
    const prisma = {
      post: { findUnique: jest.fn().mockReturnValue({ id: "" }) },
    };

    const response = await posts.get({ pageId: "id", prisma });

    expect(response).toStrictEqual({ id: "" });
  });

  it("Should get all posts", async () => {
    const prisma = {
      post: { findMany: jest.fn().mockReturnValue([{ id: "" }]) },
    };

    const response = await posts.get({ pageId: "", prisma });

    expect(response).toStrictEqual([{ id: "" }]);
  });
});
