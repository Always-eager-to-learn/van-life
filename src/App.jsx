import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Vans, {loader as vanLoader} from './pages/vans/Vans'
import VanDetail, {loader as vanDetailLoader} from './pages/vans/VanDetail'
import Layout from './components/Layout'
import HostHeader from './components/HostHeader'
import Error from './components/Error'
import Dashboard from './pages/host/Dashboard'
import Income, {loader as incomeLoader} from './pages/host/Income'
import Reviews, {loader as reviewsLoader} from './pages/host/Reviews'
import UserVans, {loader as userVansLoader} from './pages/host/UserVans'
import UserVanDetail, {loader as userVanDetailLoader} from './pages/host/UserVanDetail'
import Details, {loader as detailsLoader} from './pages/host/VanDetail/Details'
import Pricing, {loader as pricingLoader} from './pages/host/VanDetail/Pricing'
import Photos, {loader as photosLoader} from './pages/host/VanDetail/Photos'
import './server'

export default function App(){

    const routes = createRoutesFromElements(
        <Route path='/' element={<Layout />} 
            
        >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />

            <Route path='vans' element={<Vans />} loader={vanLoader} errorElement={<Error />} />
            <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} />
            <Route path='login' element={<Login />} />            

            <Route path='host' element={<HostHeader />}> 
                <Route index element={<Dashboard />} />
                <Route path='income' element={<Income />} loader={incomeLoader}/>
                <Route path='reviews' element={<Reviews />} loader={reviewsLoader} />
                <Route path='vans' element={<UserVans />} loader={userVansLoader} />
                <Route path='vans/:id' element={<UserVanDetail />} loader={userVanDetailLoader} >
                    <Route index element={<Details />} loader={detailsLoader} />
                    <Route path='pricing' element={<Pricing />} loader={pricingLoader} />
                    <Route path='photos' element={<Photos />} loader={photosLoader} />
                </Route>
            </Route>

            <Route path='*' element={<NotFound />} />
        </Route>
    )

    const browserRouter = createBrowserRouter(routes)

    // To use the dadta layer apis we use createBrowserRouter
    return (
        <RouterProvider router={browserRouter}/>
    )
}