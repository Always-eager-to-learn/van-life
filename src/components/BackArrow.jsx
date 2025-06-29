import { Link } from 'react-router-dom'
import Arrow from '../assets/arrow.png'
import styles from './Component.module.css'

export default function BackArrow({pageName = ''}){
    return (
        <section className={`${styles.back_tick}`}> 
            <img src={Arrow} alt={`Arrow image. (To return back to the ${pageName} page).`} /> 
            <Link to='..' relative='path'>
                <p className="font-medium">Back to all vans</p>
            </Link>
        </section>
    )
}