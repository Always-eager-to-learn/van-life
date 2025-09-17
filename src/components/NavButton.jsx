import styles from './NavLink.module.css'
import { ChevronDown, Settings, UserRound } from "lucide-react"
import clsx from "clsx"
import { loginStatusData as loginStatus } from "../auth"
import { useSignals } from '@preact/signals-react/runtime'

export default function NavButton({ openDialog, setDialogStatus, isPhoneDesign = false, numberOnMenu = 1}){
    useSignals()
    
    const loginStatusInfo = loginStatus.value.loginStatus
    const phoneText = {
        'firstText': loginStatusInfo === 'loggedIn' ? 'User Profile' : 'Settings',
        'secondText': 'User Van Info'
    }
    const text = numberOnMenu === 1 ? phoneText.firstText : phoneText.secondText
    const classNames = clsx({
        [styles.small_size]: true,
        [styles.reverse]: openDialog === true,
    })
    const buttonStyles = clsx({
        [styles.img_logo]: true,
        [styles.normal_design]: !isPhoneDesign,
        [styles.small_design]: isPhoneDesign,
        'whiteish': isPhoneDesign
    })

    return (
        <button 
            className={buttonStyles} 
            onClick={setDialogStatus}
        >
            {loginStatusInfo === 'loggedIn' ? 
                <UserRound className={styles.dialog_button}/> : 
                <Settings className={styles.dialog_button}/>
            }
            {isPhoneDesign ?
                <p className='font-medium epunda-slab weight-500 whiteish ch-12-width'>{text}</p> : null
            }
            <ChevronDown className={classNames}/>
        </button>
    )
}