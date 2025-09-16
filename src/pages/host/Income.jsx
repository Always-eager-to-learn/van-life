import { getAuthenticationStatus, returnLoginRedirect } from '../../auth'

export async function loader({ request }){
    const status = await getAuthenticationStatus()
    if(!status)
        return returnLoginRedirect(request.url)
    
    return null
}

export default function Income(){
    return <h1>Host Income</h1>
}