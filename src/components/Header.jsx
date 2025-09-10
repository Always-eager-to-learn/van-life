import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from './Component.module.css'
import { Settings, ChevronDown, LogIn, UserRound, LogOut } from 'lucide-react'
import clsx from 'clsx'
import { loginStatusData as loginStatus } from '../auth'

export default function Header(){

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
                <button className={`${styles.img_logo}`} onClick={setDialogStatus}>
                    {loginStatus.value === 'loggedIn' ? <UserRound className={styles.dialog_button}/> : 
                       <Settings className={styles.dialog_button}/>
                    }
                    <ChevronDown className={classNames}/>
                    <nav className={`${styles.dialog_bar} padding-zero border-radius-1 ${openDialog ? styles.active : ''}`}>
                        {loginStatus.value === 'loggedIn' ? 
                            <NavLink className={`${styles.flex_nav_bar} padding-zero`} to='logout'>
                                <LogOut className={styles.login_button}/>
                                <p className={`font-medium-big`}>Logout</p>
                            </NavLink> :
                            <NavLink className={`${styles.flex_nav_bar} padding-zero`} to='login'>
                                <LogIn className={styles.login_button}/>
                                <p className={`font-medium-big`}>Login</p>
                            </NavLink>
                        }
                    </nav>
                </button>
            </section>
        </nav>
    )
}