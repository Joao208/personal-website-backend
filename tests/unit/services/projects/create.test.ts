import * as projects from "../../../../src/services/projects";

describe("[Project create service] Test case", () => {
  it("Should create new post", async () => {
    const data = {
      title: "Test",
      description: "Test",
      cover: "https://localhost:5000",
      gitLink: "https://localhost:5000",
    };

    const response = await projects.create(data);

    expect(response).toStrictEqual({ id: "" });
  });
});
