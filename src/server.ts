import { createServer, getEnv } from "@astralstack/astraljs";
import { endpoints } from "./router";

const server = createServer({
    port: getEnv<number>('PORT', 3000),
    endpoints,
})

server.start()
