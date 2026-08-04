import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { useCart } from '../../hooks/useCart';

function Navbar() {
  const { totalQuantity } = useCart();
  return (
    <nav className='nav-container'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart ({totalQuantity})</NavLink>
    </nav>
  )
}

export default Navbar