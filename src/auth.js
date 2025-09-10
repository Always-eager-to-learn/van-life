import Cookies from 'js-cookie'
import { redirect } from 'react-router-dom'
import { signal } from '@preact/signals-react'

const status = Cookies.get('loginStatus') !== undefined ? 'loggedIn' : 'notLoggedIn'
export const loginStatusData = signal(status)

function setAuthenticationStatus(){
    Cookies.set('loginStatus', 'true', { expires: 1})
    loginStatusData.value = 'loggedIn'
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
    loginStatusData.value = 'notLoggedIn'
}

function returnRedirect(location = ''){
    const redirectLink = redirect(location)
    redirectLink.body = true
    return redirectLink
}

function returnLoginRedirect(location = '/login', message='Please login to access this information'){
    sessionStorage.setItem('notification', message)
    return returnRedirect(location)
}

export { setAuthenticationStatus, getAuthenticationStatus, clearAuthenticationStatus, returnRedirect, returnLoginRedirect}