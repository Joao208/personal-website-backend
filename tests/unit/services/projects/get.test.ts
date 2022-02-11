import * as projects from "../../../../src/services/projects";

describe("[Projects get service] Test case", () => {
  it("Should get all projects", async () => {
    const prisma = {
      project: { findMany: jest.fn().mockReturnValue([{ id: "" }]) },
    };

    const response = await projects.get({ prisma });

    expect(response).toStrictEqual([{ id: "" }]);
  });
});
