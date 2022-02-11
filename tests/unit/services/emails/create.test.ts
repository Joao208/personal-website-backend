import * as emails from "../../../../src/services/emails";

describe("[Emails create service] Test case", () => {
  it("Should create new email", async () => {
    const prisma = {
      subscriptions: { create: jest.fn().mockReturnValue({ id: "" }) },
    };

    const response = await emails.create("augustoj311@gmail.com", prisma);

    expect(response).toStrictEqual({ id: "" });
  });
});
