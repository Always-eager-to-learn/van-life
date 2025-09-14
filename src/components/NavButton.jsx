import styles from './NavLink.module.css'
import { ChevronDown, Settings, UserRound } from "lucide-react"
import clsx from "clsx"
import { loginStatusData as loginStatus } from "../auth"
import { useSignals } from "@preact/signals-react/runtime"

export default function NavButton({ openDialog, setDialogStatus, isPhoneDesign, textOnPhone}){
    useSignals()

    const classNames = clsx({
        [styles.small_size]: true,
        [styles.reverse]: openDialog === true,
    })
    const buttonStyles = clsx({
        [styles.img_logo]: true,
        [styles.normal_design]: !isPhoneDesign,
        [styles.small_design]: isPhoneDesign
    })

    return (
        <button 
            className={buttonStyles} 
            onClick={setDialogStatus}
        >
            {loginStatus.value.loginStatus === 'loggedIn' ? 
                <UserRound className={styles.dialog_button}/> : 
                <Settings className={styles.dialog_button}/>
            }
            {textOnPhone ?
                <p className='font-medium epunda-slab weight-500'>{textOnPhone}</p> : null
            }
            <ChevronDown className={classNames}/>
        </button>
    )
}