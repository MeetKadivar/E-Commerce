import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import ProductDetail from "./pages/ProductDetails/ProductDetail"
import Cart from "./pages/Cart/Cart"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout/Layout"
import CartProvider from "./context/CartProvider"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Profile from "./pages/Profile/Profile"
import { AuthProvider } from "./context/AuthContext/AuthProvider"
import Login from "./pages/Login/Login"

function App() {

  return (
    <AuthProvider>

      <CartProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </CartProvider>


    </AuthProvider>
  )
}

export default App
