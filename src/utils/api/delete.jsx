import { host } from "../../content/start"

export const DELETE = (api, token = false) => {
    if (token) {
        return fetch(host + api, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                autharization: token
            }
        })
    } else {
        return fetch(host + api, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
}