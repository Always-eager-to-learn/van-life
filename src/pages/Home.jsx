import { Link } from 'react-router-dom'
import Image from '../assets/windowimage.png'

export default function Home(){
    return (
        <>
            <main className="main-home">
                <section className="main-section">
                    <div className="image-container">
                        <img src={Image} alt="" />
                        <div className="related-info">
                            <h1>You got the travel plans, we got the travel vans.</h1>
                            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip</p>
                            <Link to='/vans'><button className="main-button">Find your van</button></Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}