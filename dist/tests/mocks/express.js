"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.express = void 0;
var mockExpressRes = function () {
    var json = jest.fn().mockReturnValue({});
    return {
        json: json,
        status: jest.fn().mockReturnValue({ json: json }),
    };
};
exports.express = {
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
