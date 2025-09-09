import { NavLink, Outlet, useLoaderData } from "react-router-dom"
import BackArrow from '../../components/BackArrow'
import styles from './UserVanDetail.module.css'
import clsx from 'clsx'
import { getHostVan } from '../../api'
import { getAuthenticationStatus, returnLoginRedirect } from "../../auth"

export async function loader({ params }){
    const status = await getAuthenticationStatus()
    if(!status)
        return returnLoginRedirect()
    
    return getHostVan(params.id)
}

export default function UserVanDetail(){

    function setActive(object){
        return `${(object.isActive ? styles.active_link : '')} font-medium`
    }

    const vanDetail= useLoaderData()
    console.log(vanDetail)

    let backgroundStyles =  {
        backgroundColor: clsx({
            '#115E59': vanDetail.type === 'rugged',
            '#161616': vanDetail.type === 'luxury',
            '#E17654': vanDetail.type === 'simple',
        })
    }

    return (
        <main className={styles.user_van_detail}>
            <BackArrow pageName="host vans"/>
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
        </main>
    )
}