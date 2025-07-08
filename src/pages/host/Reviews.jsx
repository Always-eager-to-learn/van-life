import { getAuthenticationStatus } from '../../auth'

// eslint-disable-next-line react-refresh/only-export-components
export function loader(){
    const status = getAuthenticationStatus()
    if(!status)
        return []
    
    return null
}

export default function Reviews(){
    return <h1>Host Reviews</h1>
}