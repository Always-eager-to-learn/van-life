import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

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
            </Routes>
            <footer>
                <p>Ⓒ 2022 #VANLIFE</p>
            </footer>
        </BrowserRouter>
    )
}