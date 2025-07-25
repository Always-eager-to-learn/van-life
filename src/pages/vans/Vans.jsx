import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import clsx from 'clsx'
import pageStyles from './Vans.module.css'
import { getVan } from '../../api'

// eslint-disable-next-line react-refresh/only-export-components
export function loader(){
    return getVan()
}

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

    const vanState = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')

    const vanDisplay = typeFilter !== null
                                      ? vanState.filter((van) => van.type === typeFilter)
                                      : vanState

    const vanElements = vanDisplay.map((element, index) => {
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
                    direction: index % 2 == 0 ? 'left' : 'right',
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

            <section className={pageStyles.vans_container}>
                {vanElements}
            </section>
        </main>
    )
}