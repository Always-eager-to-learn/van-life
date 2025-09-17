import { Link, NavLink } from 'react-router-dom'
import { useRef } from 'react'
import styles from './Component.module.css'
import NavButton from './NavButton'
import HostHeader from './HostHeader'
import openStatus from './hooks/openStatus'
import { mediaQuery } from './hooks/mediaQuery'
import { usecloseNavigation } from './hooks/closeNavigation'
import NavBar from './NavBar'
import DesignButton from './DesignButton'
import clsx from 'clsx'
import { NavOnPhone } from './NavOnPhone'

export default function Header(){
    function setClassName(object){
        return `${object.isActive ? styles.active_link : ''} font-semi-big`
    }

    const {openDialogStatus, setOpenStatus} = openStatus()
    const {isPhone, isDesktop} = mediaQuery()
    const navigationElement = useRef()
    usecloseNavigation(navigationElement.current, () => setOpenStatus(3), openDialogStatus.navigationBar)

    const classStyles = clsx({
        [styles.phone_navigation]: true,
        [styles.active]: openDialogStatus.navigationBar === true
    })  

    return (
        <nav>
            <Link to='.' className={`${styles.home_link} font-big`}>#VANLIFE</Link>
            <section className={styles.nav_section}>
                <NavLink to='host' className={setClassName} end={true}>
                    Host
                </NavLink>
                <NavLink to='about' className={setClassName}>
                    About
                </NavLink>
                <NavLink to='vans' className={setClassName} end={true}>
                    Vans
                </NavLink>

                {isDesktop ?
                    <div className={styles.navigation_section}>
                        <NavButton 
                            openDialog={openDialogStatus.settingsBar} 
                            setDialogStatus={() => setOpenStatus(1)}
                        />
                        <NavBar 
                            openDialog={openDialogStatus.settingsBar}
                        />
                    </div> : null
                }
            </section>
            {isPhone ? 
                <button className={`${styles.mobile_nav_bar} nav-background-color`} onClick={() => setOpenStatus(3)}>
                    <DesignButton noOfDivs={3} />
                </button> : null
            }
            {isPhone ?
                <section className={classStyles} ref={navigationElement}>
                    <section className='grid-align-self'>
                        <button className={`${styles.close_button} nav-background-color`} onClick={() => setOpenStatus(3)}>
                        <DesignButton noOfDivs={2} />
                        </button>
                        <p className='font-medium center full-width'>Menu</p>
                    </section>
                    <NavOnPhone 
                        openDialog={openDialogStatus.settingsBar} 
                        setDialogStatusfun={() => setOpenStatus(1)}
                        isPhone={isPhone}
                        normalDisplay={false}
                    />
                    <NavOnPhone 
                        numberOnMenu={2} openDialog={openDialogStatus.hostHeaderSet} 
                        setDialogStatusfun={() => setOpenStatus(2)}
                        isPhone={isPhone}
                        normalDisplay={false}
                        setUpClassNames={true}
                        navigateDown={openDialogStatus.navigateDown}
                        hostHeaderDisplay={true}
                    />
                </section> : null
            }
        </nav>
    )
}