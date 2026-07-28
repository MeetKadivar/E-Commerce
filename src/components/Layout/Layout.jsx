import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {
  return (
    <div className='layout-container'>
        <Navbar></Navbar>
        <div className='main-container'>
            <Outlet />
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout