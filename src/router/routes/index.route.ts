import { get, parseUrl } from "@astralstack/astraljs";
import { indexController } from "../controllers/index.controller";

export const indexRoute = get({
  settings: { path: parseUrl("/") },
  controller: indexController,
});
