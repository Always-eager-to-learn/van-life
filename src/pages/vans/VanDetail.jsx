import { useLocation, useLoaderData } from 'react-router-dom'
import BackArrow from '../../components/BackArrow'
import clsx from 'clsx'
import pageStyles from './VanDetail.module.css'
import { getVan } from '../../api'

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }){
    return getVan(params.id)
}

export default function VanDetail(){
    const location = useLocation()
    const van = useLoaderData()
    const text = location.state?.type || 'all'

    const styles = {
        backgroundColor: clsx({
            '#115E59': van.type == 'rugged',
            '#161616': van.type == 'luxury',
            '#E17654': van.type == 'simple'
        })
    }

    return (
        <main className={pageStyles.main_container}>
           <BackArrow pageName='vans' location={location.state.parameters} text={text}/>

            <section className={`${pageStyles.van_container} ${location.state.direction}`}>
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
 
        </main>
    )
}