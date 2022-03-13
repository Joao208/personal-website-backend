"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireToken = void 0;
var errors_stack_1 = require("errors-stack");
var error_1 = require("../services/error");
var requireToken = function (req, res, next) {
    try {
        var headers = req.headers;
        if (headers.authorization !== process.env.AUTH_TOKEN) {
            throw new errors_stack_1.UnauthorizedError({ message: "Token invalid", status: 401 });
        }
        return next();
    }
    catch (err) {
        return (0, error_1.error)({ err: err, res: res });
    }
};
exports.requireToken = requireToken;
