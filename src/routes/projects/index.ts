import { Router } from "express";
import * as Projects from "../../controllers/projects";
import { requireToken, validateProject } from "../../middlewares";

const routes = Router();

routes.get("/projects", Projects.get);

routes.post("/projects", requireToken, validateProject, Projects.create);

export default routes;
