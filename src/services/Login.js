import InstaceAxios  from "./Api";

export const login = async (username,password) => {
    const result = await InstaceAxios.get(`login?email=${username}&password=${password}`)
        .then(res => res)
        .catch(error => error)
    return result
}