import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from './Component.module.css'
import { Settings, ChevronDown, LogIn, UserRound, LogOut } from 'lucide-react'
import clsx from 'clsx'
import { loginStatusData as loginStatus } from '../auth'
import { useSignals } from '@preact/signals-react/runtime'
import { useMediaQuery } from 'react-responsive'

export default function Header(){
    useSignals()

    function setClassName(object){
        return `${object.isActive ? styles.active_link : ''} font-semi-big`
    }

    function setDialogStatus(){
        if(!openDialog)
            setOpenDialog(true)
        else
            setOpenDialog(false)
    }

    const [openDialog, setOpenDialog] = useState(false)
    const classNames = clsx({
        small_size: true,
        reverse: openDialog === true
    })
    const isPhone = useMediaQuery({
        query: '(max-width: 576px)'
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
                <section className={styles.navigation_section}>
                    <button className={`${styles.img_logo}`} onClick={setDialogStatus}>
                        {loginStatus.value.loginStatus === 'loggedIn' ? <UserRound className={styles.dialog_button}/> : 
                            <Settings className={styles.dialog_button}/>
                        }
                        <ChevronDown className={classNames}/>
                    </button>
                    <nav className={`${styles.dialog_bar} padding-zero border-radius-1 ${openDialog ? styles.active : ''}`}>
                        {loginStatus.value.loginStatus === 'loggedIn' ? 
                            <div>
                                <p className={`font-medium-big ${styles.padding_element} blackish epunda-slab`}>Welcome, {loginStatus.value.userName}</p>
                                <NavLink className={`${styles.flex_nav_bar} padding-zero ${styles.padding_element}`} to='logout'>
                                    <LogOut className={styles.login_button}/>
                                    <p className={`font-medium-big`}>Logout</p>
                                </NavLink>
                            </div>
                            :
                            <NavLink className={`${styles.flex_nav_bar} padding-zero ${styles.padding_element}`} to='login'>
                                <LogIn className={styles.login_button}/>
                                <p className={`font-medium-big`}>Login</p>
                            </NavLink>
                        }
                    </nav>
                </section>
            </section>
            {isPhone ? 
                <button className={styles.mobile_nav_bar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button> : null
            }
        </nav>
    )
}