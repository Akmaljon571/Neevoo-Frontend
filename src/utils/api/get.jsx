import { host } from "../../content/start"

export const GET = (api, token = false) => {
    if (token) {
        return fetch(host + api, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                autharization: token
            }
        })
    } else {
        return fetch(host + api)
    }
}