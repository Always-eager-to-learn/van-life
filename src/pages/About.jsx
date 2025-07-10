import { Link } from 'react-router-dom'
import PersonImage from '../assets/person-on-van.png'
import styles from './About.module.css'

export default function About(){
    return (
        <main className={styles.about_section}>
            <img src={PersonImage} alt="Image of a person on a van" />
            <section className={styles.about_info}>
                <h1 className='font-big'>Don't squeeze in a sedan when you could relax in a van.</h1>
            </section>
            <section>
                <p className='font-medium'>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br />
                    (Hitch costs extra 😉)
                </p>
                <p className={`font-medium ${styles.second_column}`}>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </section>
            <section className={styles.related_grid}>
                <div className={styles.about_container}>
                        <h2 className='font-semi-big'>Your destination is waiting.<br />Your van is ready.</h2>
                        <button>
                            <Link className='font-small' to='/vans'>Explore our vans</Link>
                        </button>
                </div>
            </section>
           
        </main>
    )
}