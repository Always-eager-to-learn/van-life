export async function getVan(){
    const response = await fetch("/api/vans")
    if(!response.ok){
        throw{
            message: 'Failed to fetch van details',
            statusText: response.statusText,
            status: response.status,
        }
    }

    const data = await response.json()
    return data.vans
}