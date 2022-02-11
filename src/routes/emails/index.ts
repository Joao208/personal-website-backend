import { Router } from "express";
import * as Emails from "../../controllers/emails";
import { validateEmail } from "../../middlewares";

const routes = Router();

routes.post("/emails", validateEmail, Emails.create);

routes.get("/unsubscribe", Emails.edelete);

export default routes;
