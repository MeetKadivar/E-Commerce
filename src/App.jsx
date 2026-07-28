import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import ProductDetail from "./pages/ProductDetails/ProductDetail"
import Cart from "./pages/Cart/Cart"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout/Layout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
