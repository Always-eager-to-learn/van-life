import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail'
import Layout from './components/Layout'
import HostHeader from './components/HostHeader'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import UserVans from './pages/host/UserVans'
import UserVanDetail from './pages/host/UserVanDetail'
import Details from './pages/host/VanDetail/Details'
import Pricing from './pages/host/VanDetail/Pricing'
import Photos from './pages/host/VanDetail/Photos'
import './server'

export default function App(){
    // React route children should also be route
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />

                    <Route path='vans' element={<Vans />} />
                    <Route path='vans/:id' element={<VanDetail />} />
                    

                    <Route path='host' element={<HostHeader />}>
                        <Route index element={<Dashboard />} />
                        <Route path='income' element={<Income />} />
                        <Route path='reviews' element={<Reviews />} />
                        <Route path='vans' element={<UserVans />} />
                        <Route path='vans/:id' element={<UserVanDetail />}>
                            <Route index element={<Details />} />
                            <Route path='pricing' element={<Pricing />} />
                            <Route path='photos' element={<Photos />} />
                        </Route>
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}