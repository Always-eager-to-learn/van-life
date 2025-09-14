import { Link, NavLink } from 'react-router-dom'
import { useRef } from 'react'
import styles from './Component.module.css'
import loginStyles from './NavLink.module.css'
import NavButton from './NavButton'
import HostHeader from './HostHeader'
import openStatus from './hooks/openStatus'
import { mediaQuery } from './hooks/mediaQuery'
import { usecloseNavigation } from './hooks/closeNavigation'
import NavBar from './NavBar'
import DesignButton from './DesignButton'
import { loginStatusData } from '../auth'
import { LogOut, LogIn } from 'lucide-react'
import { useSignals } from '@preact/signals-react/runtime'
import clsx from 'clsx'

export default function Header(){
    useSignals()
    function setClassName(object){
        return `${object.isActive ? styles.active_link : ''} font-semi-big`
    }

    const {openDialogStatus, setOpenStatus} = openStatus()
    const {isPhone, isDesktop} = mediaQuery()
    const navigationElement = useRef()
    usecloseNavigation(navigationElement.current, () => setOpenStatus(3), openDialogStatus.navigationBar)

    const classNames = loginStyles.login_button
    const loginStatus = loginStatusData.value.loginStatus
    const elementDetails = {
        'icon': loginStatus === 'loggedIn' ? <LogOut className={classNames}/> : <LogIn className={classNames}/>,
        'welcomeText': loginStatus === 'loggedIn' ? `Welcome, ${loginStatusData.value.userName}` : '',
        'route': loginStatus === 'loggedIn' ? 'logout' : 'login',
        'text': loginStatus === 'loggedIn' ? 'Logout' : 'Login'
    }
    const classStyles = clsx({
        [styles.phone_navigation]: true,
        [styles.active]: openDialogStatus.navigationBar === true
    })
    const phoneText = {
        'firstText': loginStatus === 'loggedIn' ? 'User Profile' : 'Settings',
        'secondText': 'User Van Info'
    }

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
                            setDialogStatus={setOpenStatus}
                        />
                        <NavBar 
                            openDialog={openDialogStatus.settingsBar}
                            elementDetails={elementDetails} 

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
                    <button className={`${styles.close_button} nav-background-color`} onClick={() => setOpenStatus(3)}>
                       <DesignButton noOfDivs={2} />
                    </button>
                    <div>
                        <NavButton 
                            isPhoneDesign={true} 
                            textOnPhone={phoneText.firstText}
                            openDialog={openDialogStatus.settingsBar}
                            setDialogStatus={() => setOpenStatus(1)}
                        />
                        <NavBar 
                            openDialog={openDialogStatus.settingsBar}
                            elementDetails={elementDetails}
                            isPhoneDesign={true}
                        />
                    </div>
                    <div>
                        <NavButton 
                            isPhoneDesign={true}
                            textOnPhone={phoneText.secondText}
                            openDialog={openDialogStatus.hostHeaderSet}
                            setDialogStatus={() => setOpenStatus(2)}
                        />
                        <HostHeader isPhoneDesign={true}/>
                    </div>
                </section> : null
            }
        </nav>
    )
}