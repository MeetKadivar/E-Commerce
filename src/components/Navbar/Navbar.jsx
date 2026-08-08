import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

function Navbar() {
  const { totalQuantity } = useCart();
  const { user, logout } = useAuth();
  return (
    <nav className='nav-container'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart ({totalQuantity})</NavLink>
      {user ? (
        <>
          
          <NavLink to="/profile">Profile</NavLink>
          <button onClick={logout}>Logout</button>
          
        </>
      ):(
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
      
      
    </nav>
  )
}

export default Navbar