import * as emails from "../../../../src/services/emails";

describe("[Emails create service] Test case", () => {
  it("Should create new email", async () => {
    const response = await emails.create("augustoj311@gmail.com");

    expect(response).toStrictEqual({ id: "" });
  });
});
