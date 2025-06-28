import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import BackArrow from '../../components/BackArrow'
import styles from './UserVanDetail.module.css'
import clsx from 'clsx'

export default function UserVanDetail(){

    const param = useParams()
    const [vanDetail, setVanDetail] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${param.id}`)
                .then(result => result.json())
                .then(data => setVanDetail(data.vans[0]))
    }, [param.id])

    let backgroundStyles 
    
    if(vanDetail !== null){
        backgroundStyles = {
            backgroundColor: clsx({
                '#115E59': vanDetail.type === 'rugged',
                '#161616': vanDetail.type === 'luxury',
                '#E17654': vanDetail.type === 'simple',
            })
        }
    }

    return (
        <main className={styles.user_van_detail}>
            <BackArrow location="/host/vans" pageName="host vans"/>
            {vanDetail !== null ? 
                <article className={styles.van_detail}>
                    <section className={styles.flex}>
                        <img src={vanDetail.imageUrl} alt={`The image of ${vanDetail.name} van`} />
                        <div className={styles.flex_div}>
                            <div 
                                style={backgroundStyles}
                                className="type_button"
                            >{vanDetail.type}</div>
                            <h1>{vanDetail.name}</h1>
                            <p>${vanDetail.price} <span>/day</span></p>
                        </div>
                    </section>
                    <section>
                        <NavLink>Details</NavLink>
                        <NavLink>Pricing</NavLink>
                        <NavLink>Photos</NavLink>
                    </section>
                    <section></section>
                </article>
            : <h2>Van Details Loading Please wait...</h2>}
        </main>
    )
}