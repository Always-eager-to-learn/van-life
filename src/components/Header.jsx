import { Link, NavLink } from 'react-router-dom'
import styles from './Component.module.css'

export default function Header(){

    function setClassName(object){
        return `${object.isActive ? styles.active_link : ''} font-medium`
    }

    return (
        <nav>
            <Link to='.' className={`${styles.home_link} font-semi-big`}>#VANLIFE</Link>
            <section className={styles.nav_section}>
                <NavLink to='host' className={setClassName} end={true}>
                    Host
                </NavLink>
                <NavLink to='about' className={setClassName} end={true}>
                    About
                </NavLink>
                <NavLink to='vans' className={setClassName} end={true}>
                    Vans
                </NavLink>
            </section>
        </nav>
    )
}