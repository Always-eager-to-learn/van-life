import { NavLink, useParams, Outlet } from "react-router-dom"
import { useState, useEffect } from 'react'
import BackArrow from '../../components/BackArrow'
import styles from './UserVanDetail.module.css'
import clsx from 'clsx'

export default function UserVanDetail(){

    function setActive(object){
        return `${(object.isActive ? styles.active_link : '')} font-medium`
    }

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
            <BackArrow pageName="host vans"/>
            {vanDetail !== null ? 
                <article className={styles.van_detail}>
                    <section className={styles.flex}>
                        <img src={vanDetail.imageUrl} alt={`The image of ${vanDetail.name} van`} />
                        <div className={styles.flex_div}>
                            <div 
                                style={backgroundStyles}
                                className="type_button"
                            >{vanDetail.type}</div>
                            <h1 className="font-big">{vanDetail.name}</h1>
                            <p className="font-medium">${vanDetail.price} <span className="font-very-small">/day</span></p>
                        </div>
                    </section>

                    <section className={styles.flex_nav}>
                        <NavLink 
                            className={setActive}
                            to='.'
                            end={true}
                        >
                            Details
                        </NavLink>
                        <NavLink 
                            to='pricing'
                            className={setActive}
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to='photos'
                            className={setActive}
                        >
                            Photos
                        </NavLink>
                   </section>

                    <Outlet context={{'vanDetails': vanDetail}}/>
                    
                </article>
            : <h2>Van Details Loading Please wait...</h2>}
        </main>
    )
}