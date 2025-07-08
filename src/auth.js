const status = false

function setAuthenticationStatus(){
    // set the authentication
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