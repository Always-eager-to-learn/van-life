import { useOutletContext } from 'react-router-dom'

export default function Pricing(){
    const { vanDetails } = useOutletContext()
 
    return (
        <section>
            <p className="font-semi-big">
                ${vanDetails.price.toFixed(2)}
                <span className="font-small"> /day</span>
            </p>
        </section>
    )
}