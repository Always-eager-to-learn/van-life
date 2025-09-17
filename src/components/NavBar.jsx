import styles from './NavLink.module.css'
import { NavLink } from "react-router-dom"
import clsx from 'clsx'
import { loginStatusData } from '../auth'
import { useSignals } from '@preact/signals-react/runtime'
import { LogOut, LogIn } from 'lucide-react'
import loginStyles from './NavLink.module.css'

export default function NavBar({ openDialog, isPhoneDesign }){
    useSignals()

    const classNames = clsx({
        [styles.dialog_bar]: true,
        [styles.transition_effect]: true,
        [styles.active]: openDialog,
        [styles.phone_design]: isPhoneDesign,
        [styles.desktop_design]: !isPhoneDesign,
        'phone-nav-background': isPhoneDesign
    })
    const whiteColor = clsx({
        'whiteish': isPhoneDesign
    })
    const classNamesLogin = loginStyles.login_button
    const loginStatus = loginStatusData.value.loginStatus
    const elementDetails = {
        'icon': loginStatus === 'loggedIn' ? <LogOut className={classNamesLogin}/> : <LogIn className={classNamesLogin}/>,
        'welcomeText': loginStatus === 'loggedIn' ? `Welcome, ${loginStatusData.value.userName}` : '',
        'route': loginStatus === 'loggedIn' ? 'logout' : 'login',
        'text': loginStatus === 'loggedIn' ? 'Logout' : 'Login'
    }

    return (
        <nav 
            className={`${classNames} padding-zero border-radius-1`}
        >
                <div>
                    {elementDetails.welcomeText !== '' ? 
                        <p 
                            className={`font-medium-big padding-0-3 blackish epunda-slab ${whiteColor}`}
                        >{elementDetails.welcomeText}</p> : null
                    }
                    <NavLink 
                        className={`${styles.flex_nav_bar} padding-zero ${styles.padding_element}`} 
                        to={elementDetails.route}
                    >
                        {elementDetails.icon}
                        <p className={`font-medium-big`}>
                            {elementDetails.text}
                        </p>
                    </NavLink>
                </div>
        </nav>
    )
}