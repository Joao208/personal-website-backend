"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var images_1 = __importDefault(require("./images"));
var posts_1 = __importDefault(require("./posts"));
var projects_1 = __importDefault(require("./projects"));
var emails_1 = __importDefault(require("./emails"));
var routes = (0, express_1.Router)();
routes.use(images_1.default);
routes.use(posts_1.default);
routes.use(projects_1.default);
routes.use(emails_1.default);
exports.default = routes;
