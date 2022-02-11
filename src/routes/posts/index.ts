import { Router } from "express";
import * as Posts from "../../controllers/posts";
import { requireToken, validatePosts } from "../../middlewares";

const routes = Router();

routes.get("/posts", Posts.get);

routes.post("/posts", requireToken, validatePosts, Posts.create);

export default routes;
