import * as projects from "../../../../src/services/projects";

describe("[Project create service] Test case", () => {
  it("Should create new post", async () => {
    const data = {
      title: "Test",
      description: "Test",
      markdown: "Test",
      cover: "https://localhost:5000",
      gitLink: "https://localhost:5000",
    };

    const prisma = {
      project: { create: jest.fn().mockReturnValue({ id: "" }) },
    };

    const response = await projects.create(data, prisma);

    expect(response).toStrictEqual({ id: "" });
  });
});
