import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './UserVans.module.css'

export default function UserVans(){
    const [userVans, setUserVans] = useState(null)
    let displayData = []

    useEffect(() => {
        fetch('/api/host/vans')
            .then((result) => result.json())
            .then(data => setUserVans(data.vans))
    }, [])

    if (userVans !== null){
        displayData = userVans.map((element) => {
            return (
                <Link to={`/host/vans/${element.id}`} key={element.id}  className={styles.host_container}>
                    <img src={element.imageUrl} alt={`The image of ${element.name} van`} />
                    <div className={styles.host_div}>
                            <h3 className='font-semi-big'>{element.name}</h3>
                            <p className='font-small'>${element.price} <span className='font-very-small'>/day</span></p>
                    </div>
                </Link>
            )
        })        
    }

    return (
        <main>
            {userVans !== null ? 
                <section>
                    <h1>Your listed Vans</h1>
                    <section className={styles.host_van_container}>
                        {displayData}
                    </section>
                </section>
            : <h2 className='loading'>Loading please wait...</h2>}
        </main>
    )
}