import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Component.module.css'
import { getAuthenticationStatus } from '../auth'
import { Settings, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

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

    const [loginStatus, setLoginStatus] = useState(null)
    const [openDialog, setOpenDialog] = useState(false)
    const classNames = clsx({
        small_size: true,
        reverse: openDialog === true
    })
    
    useEffect(() => {
        async function setStatus(){
            const result = await getAuthenticationStatus()
            let value = false
            if(result)
                value = true
            setLoginStatus(value)
        }
        setStatus()
    }, [])

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
                    {loginStatus ? null : 
                       <Settings/>
                    }
                    <ChevronDown className={classNames}/>
                </button>
            </section>
        </nav>
    )
}