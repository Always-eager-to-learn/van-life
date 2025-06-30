import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import pageStyles from './Vans.module.css'

export default function Vans(){

    function setParam(type='', value = ''){
        setSearchParams((prevParams) => {
            if(value != null){
                prevParams.set(type, value)
            }
            else{
                prevParams.delete(type)
            }

            return prevParams
        })
    }

    const [vanState, setVanState] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')

    useEffect(() => {
        fetch('/api/vans')
            .then((value) => value.json())
            .then((data) => setVanState(data.vans))
    }, [])

    let vanElements
    
    if(vanState !== null){
        const vanDisplay = typeFilter !== null
                                      ? vanState.filter((van) => van.type === typeFilter)
                                      : vanState

        vanElements = vanDisplay.map((element) => {
            const styles = {
                backgroundColor: clsx({
                    '#115E59': element.type == 'rugged',
                    '#161616': element.type == 'luxury',
                    '#E17654': element.type == 'simple'
                })
            }
            return (
                <Link to={`${element.id}`} key={element.id} className='a-blue' 
                    state={{
                        parameters: searchParams.toString(),
                        type: typeFilter,
                    }}
                >
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
                <button 
                    className={`${pageStyles.normal} font-small ${typeFilter === 'simple' ? pageStyles.selected : ''}`} 
                    onClick={() => setParam('type', 'simple')}
                >
                    Simple
                </button>

                <button 
                    className={`${pageStyles.normal} font-small ${typeFilter === 'luxury' ? pageStyles.selected : ''}`} 
                    onClick={() => setParam('type', 'luxury')}
                >
                    Luxury
                </button>

                <button 
                    className={`${pageStyles.normal} font-small ${typeFilter === 'rugged' ? pageStyles.selected : ''}`} 
                    onClick={() => setParam('type', 'rugged')}
                >
                    Rugged
                </button>

                {typeFilter !== null ?
                    ( <button className={`${pageStyles.special} font-small`} onClick={() => setParam('type', null)}>
                        Clear all filters
                    </button> )
                    : null
                }
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