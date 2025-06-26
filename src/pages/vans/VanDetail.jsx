import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Arrow from '../../assets/arrow.png'
import clsx from 'clsx'

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
        <main className='main-van'>
           <p> 
                <img src={Arrow} alt="Arrow image" /> 
                <Link to='/vans'>Back to all vans</Link>
            </p>

            {van !== null ? (
                 <section className='van-container'>
                    <img src={van.imageUrl} alt={`${van.name} van`} />
    
                    <div style={styles}>{van.type}</div>
    
                    <h1>{van.name}</h1>
                    <h3 className='secondary-heading'>
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