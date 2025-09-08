function setAuthenticationStatus(){
    localStorage.setItem('loginStatus', 'true')
}

async function getAuthenticationStatus(){
    return new Promise((resolve) => {
        const storageData = localStorage.getItem('loginStatus')
        if(storageData === 'true'){
            resolve(true)
        }
        resolve(false)
    })
}

function clearAuthenticationStatus(){
    localStorage.removeItem('loginStatus')
}

export { setAuthenticationStatus, getAuthenticationStatus, clearAuthenticationStatus}