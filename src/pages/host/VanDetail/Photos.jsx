import { useOutletContext } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import styles from './VanDetail.module.css'

export default function Photos(){
    const { vanDetails } = useOutletContext()
    const focusObject = useRef(null)

    useEffect(() => {
        if(focusObject.current !== null){
            focusObject.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [])

    return (
        <section className={styles.photo_container} ref={focusObject}>
            <img src={vanDetails.imageUrl} alt={`The image of ${vanDetails.name} van`} />
        </section>
    )
}