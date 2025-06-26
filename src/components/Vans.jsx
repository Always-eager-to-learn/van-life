import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

export default function Vans(){
    const [vanState, setVanState] = useState([])

    useEffect(() => {
        fetch('/api/vans')
            .then((value) => value.json())
            .then((data) => setVanState(data.vans))
    }, [])

    const vanElements = vanState.map((element) => {
        const styles = {
            backgroundColor: clsx({
                '#115E59': element.type == 'rugged',
                '#161616': element.type == 'luxury',
                '#E17654': element.type == 'simple'
            })
        }
        return (
            <Link to={`/vans/${element.id}`} key={element.id}>
                <section className='van-detail'>
                    <img src={element.imageUrl} alt={`${element.name} van`} />
                    <div>
                        <span>{element.name}</span>
                        <span>${element.price}</span>
                    </div>
                    <div className='per-day'>
                        <span>/day</span>
                    </div>
                    <div>
                        <button 
                            style={styles}
                            className='type-button'
                        >{element.type}</button>
                    </div>
                </section>
            </Link>
        )
    })

    return (
        <main className='main-vans'>
            <h1>Explore our van options</h1>
            <section className="btn-container">
                <button className='normal'>Simple</button>
                <button className='normal'>Luxury</button>
                <button className='normal'>Rugged</button>
                <button className="special">
                    Clear all filters
                </button>
            </section>

            <section className='vans-container'>
                {vanElements}
            </section>
        </main>
    )
}