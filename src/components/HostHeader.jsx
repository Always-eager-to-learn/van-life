import { NavLink, } from 'react-router-dom'
import styles from './Component.module.css'
import clsx from 'clsx'

export default function HostHeader({ openDialog, isPhoneDesign }){

    function setClassName(obj){
        return `${obj.isActive ? styles.active_link : null} font-semi-big`
    }

    const classNames = clsx({
        [styles.host_nav]: true
    })

    const links = {
        'first': isPhoneDesign ? '/host' : '.',
        'second': isPhoneDesign ? '/host/income' : 'income',
        'third': isPhoneDesign ? '/host/vans' : 'vans',
        'fourth': isPhoneDesign ? '/host/reviews' : 'reviews'
    }

    return (
        <>
            <nav className={classNames}>
                <NavLink to={links.first} className={setClassName} end >
                    Dashboard
                </NavLink>
                <NavLink to={links.second} className={setClassName}>
                    Income
                </NavLink>
                <NavLink to={links.third} className={setClassName}>
                    Vans
                </NavLink>
                <NavLink to={links.fourth}className={setClassName}>
                    Reviews
                </NavLink>
            </nav>
        </>
    )
}