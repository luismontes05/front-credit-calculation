import InstaceAxios  from "./Api";

export const dataClient = async (id = false) => {

    var method = id ? 'client?id=' + id : 'client'

    const result = await InstaceAxios.get(method)
        .then(res => res)
        .catch(error => error)
    return result
}

export const saveClient = async (data) => {
    const result = await InstaceAxios.post('client', data)
        .then(res => res)
        .catch(error => error)
    return result
}

export const typeProperties = async () => {
    const result = await InstaceAxios.get(`client/type_properties`)
        .then(res => res)
        .catch(error => error)
    return result
}