import { host } from "../../content/start"

export const PUT = (api, body, token = false) => {
    if (token) {
        return fetch(host + api, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                autharization: token
            },
            body: JSON.stringify(body)
        })
    } else {
        return fetch(host + api, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
    }
}