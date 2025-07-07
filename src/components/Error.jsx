import { useRouteError } from 'react-router-dom'
import styles from './Component.module.css'

export default function Error(){
    const error = useRouteError()
    console.log(error)

    return (
        <main>
           <p className='font-semi-big'><span className={styles.bold}>Error Message: </span>{error.message}</p>
           <p className='font-semi-big'><span className={styles.bold}>Possible Reason for Error: </span>{error.statusText}</p>
           <p className='font-semi-big'><span className={styles.bold}>Error Status: </span>{error.status}</p>
        </main>
    )
}