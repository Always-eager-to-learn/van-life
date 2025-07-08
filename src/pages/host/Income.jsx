import { getAuthenticationStatus } from '../../auth'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
    const status = getAuthenticationStatus()
    if(!status)
        return []
    
    return null
}

export default function Income(){
    return <h1>Host Income</h1>
}