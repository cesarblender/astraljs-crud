import { EndpointType } from "@astralstack/astraljs";
import { indexRoute } from "./routes/index.route";

export const endpoints: EndpointType<any>[] = [indexRoute];
