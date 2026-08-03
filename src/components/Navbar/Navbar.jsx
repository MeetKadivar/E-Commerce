import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { useCart } from '../../hooks/useCart';

function Navbar() {
  const { cartItems } = useCart();
  return (
    <nav className='nav-container'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart ({cartItems.length})</NavLink>
    </nav>
  )
}

export default Navbar