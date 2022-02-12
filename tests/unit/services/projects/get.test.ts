import * as projects from "../../../../src/services/projects";

jest.mock("../../../../src/config/prisma", () => ({
  project: {
    findMany: jest.fn().mockReturnValue([{ id: "" }]),
  },
}));

describe("[Projects get service] Test case", () => {
  it("Should get all projects", async () => {
    const response = await projects.get();

    expect(response).toStrictEqual([{ id: "" }]);
  });
});
