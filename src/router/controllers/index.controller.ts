import { Controller } from "@astralstack/astraljs";

export const indexController: Controller<null> = (params) => {
    return {
        status: 200,
        data: {
            hello: "Hello world!"
        }
    }
}