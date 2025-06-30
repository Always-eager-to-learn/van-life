import { useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BackArrow from '../../components/BackArrow'
import clsx from 'clsx'
import pageStyles from './VanDetail.module.css'

export default function VanDetail(){
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = useState(null)
    const text = location.state?.type || 'all'

    let styles = {}
    if(van){
        styles = {
            backgroundColor: clsx({
                '#115E59': van.type == 'rugged',
                '#161616': van.type == 'luxury',
                '#E17654': van.type == 'simple'
            })
        }
    }

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((value) => value.json())
            .then((data) => setVan(data.vans))
    }, [params.id])

    return (
        <main className={pageStyles.main_container}>
           <BackArrow pageName='vans' location={location.state.parameters} text={text}/>

            {van !== null ? (
                 <section className={pageStyles.van_container}>
                    <img src={van.imageUrl} alt={`Image of the ${van.name} van.`} />
    
                    <div style={styles} className='type_button'>{van.type}</div>
    
                    <h1 className='font-big'>{van.name}</h1>
                    <h3 className={`${pageStyles.secondary_heading} font-medium`}>
                        ${van.price}
                        <span className='font-very-small'>
                            /day
                        </span>
                    </h3>
    
                    <p className='font-small'>
                        {van.description}
                    </p>
    
                    <button className='font-small'>
                        Rent this van
                    </button>
                </section>
            ) : <h2 className='loading'>Loading please wait...</h2>}
 
        </main>
    )
}