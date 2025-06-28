import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BackArrow from '../../components/BackArrow'
import clsx from 'clsx'
import pageStyles from './VanDetail.module.css'

export default function VanDetail(){
    const params = useParams()
    const [van, setVan] = useState(null)
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
        <main>
           <BackArrow location='/vans' pageName='vans' />

            {van !== null ? (
                 <section className={pageStyles.van_container}>
                    <img src={van.imageUrl} alt={`Image of the ${van.name} van.`} />
    
                    <div style={styles} className='type_button'>{van.type}</div>
    
                    <h1>{van.name}</h1>
                    <h3 className={pageStyles.secondary_heading}>
                        ${van.price}
                        <span>
                            /day
                        </span>
                    </h3>
    
                    <p>
                        {van.description}
                    </p>
    
                    <button>
                        Rent this van
                    </button>
                </section>
            ) : <h2 className='loading'>Loading please wait...</h2>}
 
        </main>
    )
}