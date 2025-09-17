import clsx from 'clsx'
import styles from './Component.module.css'
import { NavigationSection } from './NavigationSection'
import DesignButton from './DesignButton'
import { useopenStatus } from './hooks/openStatus'
import { useRef } from 'react'
import { usecloseNavigation } from './hooks/closeNavigation'
import HostHeader from './HostHeader'
import NavBar from './NavBar'

export default function PhoneNav({ isPhone = true }){
    const { openDialogStatus, setOpenStatus } = useopenStatus()
    const navigationElement = useRef()
    usecloseNavigation(navigationElement.current, () => setOpenStatus(3), openDialogStatus.navigationBar)

    const classStyles = clsx({
        [styles.phone_navigation]: true,
        [styles.active]: openDialogStatus.navigationBar === true
    })

    const data = [
        {
            'openDialog': openDialogStatus.settingsBar,
            'setDialogStatusfun': () => setOpenStatus(1),
            'isPhone': isPhone,
            'navBarElement': <NavBar openDialog={openDialogStatus.settingsBar} isPhoneDesign={isPhone}/>,
            'normalDisplay': true,
            'navigateDown': null
        },
        {
            'openDialog': openDialogStatus.hostHeaderSet,
            'setDialogStatusfun': () => setOpenStatus(2),
            'isPhone': isPhone,
            'navBarElement': <HostHeader isPhoneDesign={isPhone} openDialog={openDialogStatus.hostHeaderSet} />,
            'normalDisplay': false,
            'navigateDown': openDialogStatus.navigateDown
        }
    ]

    const navigationElements = data.map((element, index) => {
        return (
            <NavigationSection 
                key={index}
                numberOnMenu={index} 
                openDialog={element.openDialog} 
                setDialogStatusfun={element.setDialogStatusfun}
                isPhone={element.isPhone}
                normalDisplay={element.normalDisplay}
                navigateDown={element.navigateDown}
                navBarElement={element.navBarElement}
            />
        )
    })

    return (
        <>
            <button className={`${styles.mobile_nav_bar} nav-background-color`} onClick={() => setOpenStatus(3)}>
                <DesignButton noOfDivs={3} />
            </button>

            <section className={classStyles} ref={navigationElement}>
                <section className='grid-align-self'>
                    <button className={`${styles.close_button} nav-background-color`} onClick={() => setOpenStatus(3)}>
                    <DesignButton noOfDivs={2} />
                    </button>
                    <p className='font-medium center full-width'>Menu</p>
                </section>
                {navigationElements}
            </section>
        </>
    )
}