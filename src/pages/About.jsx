import PersonImage from '../assets/person-on-van.png'

export default function About(){
    return (
        <main className='about-section'>
            <img src={PersonImage} alt="Image of a person on a van" />
            <section>
                <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                <p>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br />
                    (Hitch costs extra 😉)

                    <br /><br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>

                <div className='about-container'>
                    <h2>Your destination is waiting.<br />Your van is ready.</h2>
                    <button>Explore our vans</button>
                </div>
            </section>
        </main>
    )
}