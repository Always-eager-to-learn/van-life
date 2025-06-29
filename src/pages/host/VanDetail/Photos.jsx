import { useOutletContext } from 'react-router-dom'
import styles from './VanDetail.module.css'

export default function Photos(){
    const { vanDetails } = useOutletContext()
    return (
        <section className={styles.photo_container}>
            <img src={vanDetails.imageUrl} alt={`The image of ${vanDetails.name} van`} />
        </section>
    )
}