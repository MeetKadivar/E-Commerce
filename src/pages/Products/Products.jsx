import { useEffect, useState } from "react"
import { getProducts } from '../../services/product-service'
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";

function Products() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterProductList, setFilterProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProductList(data);
        setFilterProductList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [])

  if (loading) {
    return <p>Loading....</p>
  }

  if (error) {
    return <p>Something went wrong. Please try again.</p>
  }

  const onSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilterProductList(productList);
      return;
    }
    const filteredProducts = productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setFilterProductList(filteredProducts);
  }

  return (
    <div>
      <Search searchValue={(e) => onSearch(e)} />
      {filterProductList.length > 0 ? filterProductList.map((el) => {
        return <ProductCard key={el.id} data={el}></ProductCard>
      }) : filterProductList.length === 0 && productList.length === 0  ? <p>No products available.</p> : filterProductList.length === 0 ? <p>No products found.</p> : null}
    </div>
  )
}

export default Products