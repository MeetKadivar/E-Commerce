import { useEffect, useState } from "react"
import { getProducts } from '../../services/product-service'
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
  const [productList , setProductList] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProductList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[])

  if(loading){
    return <p>Loading....</p>
  }

  if(error){
    return <p>{error}</p>
  }
  return (
    <div>
        {productList.map((el) => {
          return <ProductCard key={el.id} data={el}></ProductCard>
        })}
    </div>
  )
}

export default Products