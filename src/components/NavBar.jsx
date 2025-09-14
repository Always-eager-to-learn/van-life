import styles from './NavLink.module.css'
import { NavLink } from "react-router-dom"
import clsx from 'clsx'

export default function NavBar({ openDialog, elementDetails, isPhoneDesign }){
    const classNames = clsx({
        [styles.dialog_bar]: true,
        [styles.active]: openDialog,
        [styles.phone_design]: isPhoneDesign,
        [styles.desktop_design]: !isPhoneDesign
    })
    return (
        <nav 
            className={`${classNames} padding-zero border-radius-1`}
        >
                <div>
                    {elementDetails.welcomeText !== '' ? 
                        <p 
                            className={`font-medium-big ${styles.padding_element} blackish epunda-slab`}
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