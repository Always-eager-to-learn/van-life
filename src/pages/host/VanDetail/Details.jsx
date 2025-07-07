import { useOutletContext } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import styles from './VanDetail.module.css'

// eslint-disable-next-line react-refresh/only-export-components
export function loader(){
    return null
}

export default function Details(){
    const { vanDetails } = useOutletContext()
    const focusObject = useRef(null)

    useEffect(() => {
        if(focusObject.current !== null){
            focusObject.current.scrollIntoView({ behavior: 'smooth'})
        }
    }, [])

    return (
        <section className={styles.van_info} ref={focusObject}>
            <p className="font-medium">
                <span className={styles.bold}>Name: </span> {vanDetails.name}
            </p>
            <p className={`${styles.capitalize} font-medium`}>
                <span className={styles.bold}>Category: </span> {vanDetails.type}
            </p>
            <p className="font-medium">
                <span className={styles.bold}>Description: </span> {vanDetails.description} 
            </p>
            <p className="font-medium">
                <span className={styles.bold}>Visibility: </span>Public
            </p>
        </section>
    )
}