import * as posts from "../../../../src/services/posts";

describe("[Post create service] Test case", () => {
  it("Should create new post", async () => {
    const data = {
      title: "Test",
      description: "Test",
      markdown: "Test",
      subtitle: "Test",
      cover: "https://localhost:5000",
    };

    const prisma = {
      post: { create: jest.fn().mockReturnValue({ id: "" }) },
    };

    const response = await posts.create(data, prisma);

    expect(response).toStrictEqual({ id: "" });
  });
});
