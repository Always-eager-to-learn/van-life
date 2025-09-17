import { loginStatusData } from "../auth"
import { useSignals } from "@preact/signals-react/runtime"
import NavButton from "./NavButton"
import clsx from "clsx"
import loginStyles from './NavLink.module.css'
import styles from './Component.module.css'

export function NavigationSection({ numberOnMenu = 1, openDialog, setDialogStatusfun, isPhone = false, normalDisplay = true, navigateDown = null, navBarElement }){
    useSignals()

    const elementUp = clsx({
        [loginStyles.element_transform]: isPhone && navigateDown !== null,
        [loginStyles.element_up]: isPhone && !navigateDown && navigateDown !== null,
        [loginStyles.element_down]: isPhone && navigateDown && navigateDown !== null,
        '': navigateDown !== null,
        [styles.navigation_section]: !isPhone
    })
    const loginStatus = loginStatusData.value.loginStatus

    return (
        <>
            {loginStatus === 'loggedIn' || normalDisplay ?
                <section className={elementUp}>
                    <NavButton 
                        isPhoneDesign={isPhone}
                        numberOnMenu={numberOnMenu}
                        openDialog={openDialog}
                        setDialogStatus={setDialogStatusfun}
                    />
                    {navBarElement}
                </section> : null
            }
        </>
    )
}