import { useOutletContext } from 'react-router-dom'
import { useEffect, useRef } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export function loader(){
    return null
}

export default function Pricing(){
    const { vanDetails } = useOutletContext()
    const focusObject = useRef(null);

    useEffect(() => {
        if(focusObject.current !== null){
            focusObject.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [])
 
    return (
        <section>
            <p className="font-semi-big" ref={focusObject}>
                ${vanDetails.price.toFixed(2)}
                <span className="font-small"> /day</span>
            </p>
        </section>
    )
}