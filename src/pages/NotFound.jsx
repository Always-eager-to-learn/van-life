import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound(){
    return (
        <main className={styles.main_element}>
            <h1 className="font-big">
                Sorry, the page you were looking for is not available.
            </h1>
            <button className={styles.button}>
                <Link to='/' className='font-medium'>Return to the home Page</Link>
            </button>
        </main>
    )
}