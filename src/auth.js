import Cookies from 'js-cookie'
import { redirect } from 'react-router-dom'
import { signal } from '@preact/signals-react'
import { getUserInfo } from './api'

const data = await getUserInfo()
const statusOfLogin = Cookies.get('loginStatus')
const status = {
    'loginStatus': statusOfLogin !== undefined ? 'loggedIn' : 'notLoggedIn',
    'userName': statusOfLogin !== undefined ? data.name : ''
}

export const loginStatusData = signal(status)

function setAuthenticationStatus(name = ''){
    Cookies.set('loginStatus', 'true', { expires: 1})
    loginStatusData.value = {
        'loginStatus': 'loggedIn',
        'userName': name,
    }
}

async function getAuthenticationStatus(){
    return new Promise((resolve) => {
        const storageData = Cookies.get('loginStatus')
        if(storageData === 'true'){
            resolve(true)
        }
        resolve(false)
    })
}

function clearAuthenticationStatus(){
    Cookies.remove('loginStatus')
    loginStatusData.value = {
        'loginStatus': 'notLoggedIn',
        'userName': ''
    }
}

function returnRedirect(location = ''){
    const redirectLink = redirect(location)
    redirectLink.body = true
    return redirectLink
}

function returnLoginRedirect(location = '/login', message='Please login to access this information'){
    sessionStorage.setItem('notification', message)
    const url = new URL(location)
    const sentLocation = `/login?redirectTo=${url.pathname}`
    return returnRedirect(sentLocation)
}

export { setAuthenticationStatus, getAuthenticationStatus, clearAuthenticationStatus, returnRedirect, returnLoginRedirect}