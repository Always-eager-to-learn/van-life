import { getAuthenticationStatus } from '../../auth'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
    const status = await getAuthenticationStatus()
    if(!status)
        return []

    return null
}

export default function Dashboard(){
    return <h1>Dashboard</h1>
}