import { Link } from 'react-router-dom'
import Image from '../assets/windowimage.png'
import styles from './Home.module.css'

export default function Home(){
    return (
        <>
            <main className={styles.main_home}>

                <section className={styles.main_section}>

                    <div className={styles.image_container}>

                        <img src={Image} alt="Image of a mountain from a van's perspective" />
                        <div className={styles.related_info}>

                            <h1 className='font-big'>You got the travel plans, we got the travel vans.</h1>
                            <p className='font-medium'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip</p>

                            <Link to='/vans'><button className={`${styles.main_button} font-medium`}>Find your van</button></Link>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}