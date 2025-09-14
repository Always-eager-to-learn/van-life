import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Login, {action as loginAction, loader as loginLoader} from './pages/Login'
import { loader as logoutLoader } from './pages/Logout'
import Vans, {loader as vanLoader} from './pages/vans/Vans'
import VanDetail, {loader as vanDetailLoader} from './pages/vans/VanDetail'
import Layout from './components/Layout'
import Error from './components/Error'
import Dashboard, {loader as dashboardLoader} from './pages/host/Dashboard'
import Income, {loader as incomeLoader} from './pages/host/Income'
import Reviews, {loader as reviewsLoader} from './pages/host/Reviews'
import UserVans, {loader as userVansLoader} from './pages/host/UserVans'
import UserVanDetail, {loader as userVanDetailLoader} from './pages/host/UserVanDetail'
import Details, {loader as detailsLoader} from './pages/host/VanDetail/Details'
import Pricing, {loader as pricingLoader} from './pages/host/VanDetail/Pricing'
import Photos, {loader as photosLoader} from './pages/host/VanDetail/Photos'
import HostHeaderLayout from './components/HostHeaderLayout'

export default function App(){

    const routes = createRoutesFromElements(
        <Route path='/' element={<Layout />} 
            errorElement={
                <Layout>
                    <Error />
                </Layout>
            }
        >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />

            <Route path='vans' element={<Vans />} loader={vanLoader}/>
            <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} />
            <Route path='login' element={<Login />} action={loginAction} loader={loginLoader}/>
            <Route path='logout' loader={logoutLoader} />       

            <Route path='host' element={<HostHeaderLayout />}> 
                <Route index element={<Dashboard />} loader={dashboardLoader} />
                <Route path='income' element={<Income />} loader={incomeLoader} />
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

    // To use the data layer apis we use createBrowserRouter
    return (
        <RouterProvider router={browserRouter}/>
    )
}