import { Link } from 'react-router-dom'
import PersonImage from '../assets/person-on-van.png'
import WindowImage from '../assets/image-of-mountain.jpg'
import styles from './About.module.css'
import { useMediaQuery } from 'react-responsive'

export default function About(){
    
    const desktopQuery = useMediaQuery({
        query: '(min-width: 949px)'
    })

    return (
        <main className={styles.about_section}>
            <img src={PersonImage} alt="Image of a person on a van" />
            <section className={styles.about_info}>
                <h1 className='font-big'>Don't squeeze in a sedan when you could relax in a van.</h1>
            </section>

            {desktopQuery ? 
                <div className={styles.desktop_img_container}>
                    <img src={WindowImage} alt="View of a mountain from a van" className={styles.desktop_img} />
                </div> 
                : null
            }
            
            <section className={styles.about_para}>
                <p className='font-medium'>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br />
                    (Hitch costs extra 😉)
                </p>
                <p className={`font-medium`}>
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