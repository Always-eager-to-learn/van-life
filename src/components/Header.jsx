import { Link, NavLink } from 'react-router-dom'

export default function Header(){

    function setClassName(object){
        return object.isActive ? 'active-link' : null
    }

    return (
        <nav>
            <Link to='/' className='home-link'>#VANLIFE</Link>
            <section className='nav-section'>
                <NavLink to='/host' className={setClassName}>
                Host</NavLink>
                <NavLink to='/about' className={setClassName}>
                About</NavLink>
                <NavLink to='/vans' className={setClassName}>
                Vans</NavLink>
            </section>
        </nav>
    )
}