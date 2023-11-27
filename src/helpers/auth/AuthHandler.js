import Cookies from "js-cookie";

export const isLogged = () => {
    let token = Cookies.get('token')
    return token? true : false
}

export const doLogin = (json) => {
    Cookies.set("token", json.token, {expires: 1})
}

export const doLogout = () => {
    Cookies.remove("token")
}