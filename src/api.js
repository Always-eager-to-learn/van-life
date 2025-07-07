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

export {getVan, getHostVan}