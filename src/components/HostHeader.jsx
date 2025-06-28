import { Outlet, NavLink } from 'react-router-dom'
import styles from './Component.module.css'

export default function HostHeader(){

    function setClassName(obj){
        return obj.isActive ? styles.active_link : null
    }

    return (
        <>
            <nav className={styles.host_nav}>
                <NavLink to='/host' className={setClassName} end>
                    Dashboard
                </NavLink>
                <NavLink to='/host/income' className={setClassName}>
                    Income
                </NavLink>
                <NavLink to='/host/vans' className={setClassName}>
                    Vans
                </NavLink>
                <NavLink to='/host/reviews' className={setClassName}>
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}