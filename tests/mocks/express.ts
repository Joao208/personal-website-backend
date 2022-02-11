const mockExpressRes = () => {
  const json = jest.fn().mockReturnValue({});

  return {
    json,
    status: jest.fn().mockReturnValue({ json }),
  };
};

export const express = {
  res: mockExpressRes(),
  next: jest.fn(),
  req: {
    body: {},
    params: {},
    headers: {},
    query: {},
    file: { key: "" },
  },
};
