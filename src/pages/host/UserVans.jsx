import { Link, useLoaderData } from 'react-router-dom'
import styles from './UserVans.module.css'
import { getHostVan } from '../../api'
import { getAuthenticationStatus, returnLoginRedirect } from '../../auth'

export async function loader(){
    const status = await getAuthenticationStatus()
    if(!status)
        return returnLoginRedirect()
    
    return getHostVan()
}

export default function UserVans(){
    const userVans= useLoaderData()
    const displayData = userVans.map((element) => {
        return (
            <Link to={`${element.id}`} key={element.id}  className={styles.host_container}>
                <img src={element.imageUrl} alt={`The image of ${element.name} van`} />
                <div className={styles.host_div}>
                        <h3 className='font-semi-big'>{element.name}</h3>
                        <p className='font-small'>${element.price} <span className='font-very-small'>/day</span></p>
                </div>
            </Link>
        )
    })        

    return (
        <main>
            <section>
                <h1 className='font-big'>Your listed Vans</h1>
                <section className={styles.host_van_container}>
                    {displayData}
                </section>
            </section>
        </main>
    )
}