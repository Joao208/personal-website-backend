"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProject = void 0;
var ajv_1 = __importDefault(require("ajv"));
var errors_stack_1 = require("errors-stack");
var error_1 = require("../services/error");
var validateProject = function (req, res, next) {
    try {
        var body = req.body;
        var schema = {
            type: "object",
            properties: {
                title: {
                    type: "string",
                },
                description: {
                    type: "string",
                },
                gitLink: {
                    type: "string",
                },
                cover: {
                    type: "string",
                },
                lang: {
                    type: "string",
                },
            },
            required: ["title", "description", "gitLink", "cover"],
            additionalProperties: false,
        };
        var ajv = new ajv_1.default();
        var validate = ajv.compile(schema);
        if (!validate(body)) {
            throw new errors_stack_1.BodyPropertyError("Body params is invalid!");
        }
        if (!body.lang)
            req.body.lang = "en";
        return next();
    }
    catch (err) {
        return (0, error_1.error)({ res: res, err: err });
    }
};
exports.validateProject = validateProject;
