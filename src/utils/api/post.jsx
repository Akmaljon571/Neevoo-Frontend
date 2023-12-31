import { host } from "../../context/start"

export const POST = (api, body, token = false) => {
    if (token) {
        return fetch(host + api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: token
            },
            body: JSON.stringify(body)
        })
    } else {
        return fetch(host + api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
    }
}