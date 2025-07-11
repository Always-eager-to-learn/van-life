import { Outlet, NavLink, Navigate, useLoaderData } from 'react-router-dom'
import styles from './Component.module.css'

export default function HostHeader(){

    function setClassName(obj){
        return `${obj.isActive ? styles.active_link : null} font-medium`
    }
    const status = useLoaderData()

    return (
        <>
            { status ?
                <>
                    <nav className={styles.host_nav}>
                        <NavLink to='.' className={setClassName} end >
                            Dashboard
                        </NavLink>
                        <NavLink to='income' className={setClassName}>
                            Income
                        </NavLink>
                        <NavLink to='vans' className={setClassName}>
                            Vans
                        </NavLink>
                        <NavLink to='reviews' className={setClassName}>
                            Reviews
                        </NavLink>
                    </nav>
                    <Outlet />
                </>
                : <Navigate to='/login' state={
                    {message: 'Please login to access this information'}
                }/>
            }
        </>
    )
}