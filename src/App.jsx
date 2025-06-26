import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
import VanDetail from './components/VanDetail'
import './server'

export default function App(){
    return (
        <BrowserRouter>
            <nav>
                <Link to='/' className='home-link'>#VANLIFE</Link>
                <section className='nav-section'>
                    <Link to='/about'>About</Link>
                    <Link to='/vans'>Vans</Link>
                </section>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/vans' element={<Vans />} />
                <Route path='/vans/:id' element={<VanDetail />} />
            </Routes>
            <footer>
                <p>Ⓒ 2025 #VANLIFE</p>
            </footer>
        </BrowserRouter>
    )
}