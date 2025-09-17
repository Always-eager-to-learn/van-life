import { loginStatusData } from "../auth"
import { useSignals } from "@preact/signals-react/runtime"
import HostHeader from "./HostHeader"
import NavButton from "./NavButton"
import NavBar from "./NavBar"
import clsx from "clsx"
import loginStyles from './NavLink.module.css'

export function NavOnPhone({ numberOnMenu = 1, openDialog, setDialogStatusfun, isPhone, normalDisplay = true, setUpClassNames = false, hostHeaderDisplay = false, navigateDown }){
    useSignals()

    const elementUp = clsx({
        [loginStyles.element_transform]: isPhone && setUpClassNames,
        [loginStyles.element_up]: isPhone && !navigateDown && setUpClassNames,
        [loginStyles.element_down]: isPhone && navigateDown && setUpClassNames,
        '': !setUpClassNames
    })
    const loginStatus = loginStatusData.value.loginStatus

    return (
        <section>
            {loginStatus === 'loggedIn' || normalDisplay ?
                <section className={elementUp}>
                    <NavButton 
                        isPhoneDesign={isPhone}
                        numberOnMenu={numberOnMenu}
                        openDialog={openDialog}
                        setDialogStatus={setDialogStatusfun}
                    />
                    {hostHeaderDisplay ?
                        <HostHeader isPhoneDesign={isPhone} openDialog={openDialog}/> :
                        <NavBar 
                            openDialog={openDialog}
                            isPhoneDesign={isPhone}
                        />
                    }
                </section> : null
            }
        </section>
    )
}