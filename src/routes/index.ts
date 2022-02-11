import { Router } from "express";

import images from "./images";
import posts from "./posts";
import projects from "./projects";
import emails from "./emails";

const routes = Router();

routes.use(images);
routes.use(posts);
routes.use(projects);
routes.use(emails);

export default routes;
