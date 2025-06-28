import { Link } from 'react-router-dom'
import Arrow from '../assets/arrow.png'
import styles from './Component.module.css'

export default function BackArrow({location = '', pageName = ''}){
    return (
        <p className={styles.back_tick}> 
            <img src={Arrow} alt={`Arrow image. (To return back to the ${pageName} page).`} /> 
            <Link to={`${location}`}>Back to all vans</Link>
        </p>
    )
}