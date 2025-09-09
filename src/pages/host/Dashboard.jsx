import { getAuthenticationStatus, returnLoginRedirect } from '../../auth'

export async function loader(){
    const status = await getAuthenticationStatus()
    if(!status)
        return returnLoginRedirect()

    return null
}

export default function Dashboard(){
    return <h1>Dashboard</h1>
}