"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var __1 = require("..");
var error = function (_a) {
    var res = _a.res, err = _a.err;
    __1.logger.error(err);
    return res
        .status((err === null || err === void 0 ? void 0 : err.status) || 400)
        .json((err === null || err === void 0 ? void 0 : err.message) || "Internal Server Error");
};
exports.error = error;
