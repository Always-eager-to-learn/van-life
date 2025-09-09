import { getAuthenticationStatus, returnLoginRedirect } from '../../auth'

export async function loader(){
    const status = await getAuthenticationStatus()
    if(!status)
        return returnLoginRedirect()
    
    return null
}

export default function Income(){
    return <h1>Host Income</h1>
}