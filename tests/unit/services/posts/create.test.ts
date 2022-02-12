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

    const response = await posts.create(data);

    expect(response).toStrictEqual({ id: "" });
  });
});
