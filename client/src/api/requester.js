const requester = async (method, url, data) => {
    const options = {}
    
    const authDataStorage = localStorage.getItem('auth')
    
    if(authDataStorage) {
        const authData = JSON.parse(authDataStorage)
        const { accessToken } = authData

        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        }
    }

    if(method !== 'GET') {
        options.method = method
    }

    if(data) {
        options.headers = {
            ...options.headers,
            "Content-Type": "application/json"
        }

        options.body = JSON.stringify(data)
    }

    const response = await fetch(url, options)
    const result = await response.json()

    if(!response.ok) {
        console.log(result)
        throw result
    }

    return result;
}

export const get = requester.bind(null, 'GET')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'PUT')
export const del = requester.bind(null, 'DELETE')