import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import pageStyles from './Vans.module.css'

export default function Vans(){
    const [vanState, setVanState] = useState(null)

    useEffect(() => {
        fetch('/api/vans')
            .then((value) => value.json())
            .then((data) => setVanState(data.vans))
    }, [])

    let vanElements
    
    if(vanState !== null){
        vanElements = vanState.map((element) => {
            const styles = {
                backgroundColor: clsx({
                    '#115E59': element.type == 'rugged',
                    '#161616': element.type == 'luxury',
                    '#E17654': element.type == 'simple'
                })
            }
            return (
                <Link to={`/vans/${element.id}`} key={element.id}>
                    <section className={pageStyles.van_detail}>
                        <img src={element.imageUrl} alt={`This is a ${element.name} van picture.`} />
                        <div className='font-medium'>
                            <span>{element.name}</span>
                            <span>${element.price}</span>
                        </div>
                        <div className={`${pageStyles.per_day} font-very-small`}>
                            <span>/day</span>
                        </div>
                        <div>
                            <div 
                                style={styles}
                                className='type_button font-small'
                            >{element.type}
                            </div>
                        </div>
                    </section>
                </Link>
            )
        })
    }

    return (
        <main className={pageStyles.main_vans}>
            <h1 className='font-big'>Explore our van options</h1>
            <section className={pageStyles.btn_container}>
                <button className={`${pageStyles.normal} font-small`}>Simple</button>
                <button className={`${pageStyles.normal} font-small`}>Luxury</button>
                <button className={`${pageStyles.normal} font-small`}>Rugged</button>
                <button className={`${pageStyles.special} font-small`}>
                    Clear all filters
                </button>
            </section>

            {vanState ? 
                <section className={pageStyles.vans_container}>
                    {vanElements}
                </section>
            : <h2 className='loading'>Loading please wait...</h2>
            }
        </main>
    )
}