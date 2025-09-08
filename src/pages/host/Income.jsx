import { getAuthenticationStatus } from '../../auth'

export async function loader(){
    const status = getAuthenticationStatus()
    if(!status)
        return []
    
    return null
}

export default function Income(){
    return <h1>Host Income</h1>
}