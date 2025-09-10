import { returnRedirect, clearAuthenticationStatus } from '../auth'

export function loader(){
    clearAuthenticationStatus()
    return returnRedirect('/')
}