let status = false

function setAuthenticationStatus(){
    status = true
}

async function getAuthenticationStatus(){
    return new Promise((resolve) => {
        if(status === true){
            resolve(true)
        }
        resolve(false)
    })
}

function clearAuthenticationStatus(){
    // to clear the authentication status
}

export { setAuthenticationStatus, getAuthenticationStatus, clearAuthenticationStatus}