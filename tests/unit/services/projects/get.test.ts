import * as projects from "../../../../src/services/projects";

describe("[Projects get service] Test case", () => {
  it("Should get all projects", async () => {
    const response = await projects.get();

    expect(response).toStrictEqual([]);
  });
});
