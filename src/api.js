import { setAuthenticationStatus } from "./auth"
import Cookies from 'js-cookie'

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
        { method: "post", body: stringData }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    setAuthenticationStatus(data.user.name)
    return data
}

async function getUserInfo(){
    const login = Cookies.get('loginStatus')
    if(login){
        const dataPackets = await fetch("/api/getUserInfo")
        const data = await dataPackets.json()
        return data.users[0]
    }
}

export {getVan, getHostVan, loginUser, getUserInfo}