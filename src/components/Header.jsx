import { Link, NavLink } from 'react-router-dom'
import styles from './Component.module.css'
import { mediaQuery } from './hooks/mediaQuery'
import PhoneNav from './PhoneNav'
import DesktopNav from './DesktopNav'
import { navigationLinks } from '../data/navigationLinks'

export default function Header(){
    function setClassName(object){
        return `${object.isActive ? styles.active_link : ''} font-semi-big`
    }

    const {isPhone, isDesktop} = mediaQuery()
    const linkElements = navigationLinks.map((element) => {
        return (
            <NavLink to={element.location} className={setClassName} end={element.end}>
                {element.name}
            </NavLink>
        )
    })

    return (
        <nav>
            <Link to='.' className={`${styles.home_link} font-big`}>#VANLIFE</Link>
            <section className={styles.nav_section}>
                {linkElements}
                {isDesktop ?
                    <DesktopNav /> : null
                }
            </section>
            {isPhone ?
                <PhoneNav /> : null
            }
        </nav>
    )
}