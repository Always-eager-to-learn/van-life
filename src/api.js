async function getVan(id = null){
    const normalUrl = '/api/vans'
    const url = id !== null ? `${normalUrl}/${id}` : normalUrl
    const response = await fetch(url)
    if(!response.ok){
        throw {
            message: 'Failed to fetch van details. Please try again',
            statusText: response.statusText,
            status: response.status,
        }
    }

    const data = await response.json()
    return data.vans
}

async function getHostVan(id = null){
    const normalUrl = '/api/host/vans'
    const url = id !== null ? `${normalUrl}/${id}` : normalUrl
    const response = await fetch(url)
    if (!response.ok){
        throw{
            message: 'Failed to fetch the details of the host vans. Please try again.',
            statusText: response.statusText,
            status: response.status
        }
    }

    const data = await response.json()
    if(id !== null){
        return data.vans[0]
    }
    return data.vans
}

async function loginUser(credentials) {
    const stringData = JSON.stringify(credentials)
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(credentials) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export {getVan, getHostVan, loginUser}