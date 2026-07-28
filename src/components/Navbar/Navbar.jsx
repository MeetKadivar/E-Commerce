import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav-container'>
      <NavLink to={`/`}>Home</NavLink>
      <NavLink to={`/products`}>Products</NavLink>
      <NavLink to={`cart`}>Cart</NavLink>
    </nav>
  )
}

export default Navbar