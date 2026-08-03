import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductDetail } from "../../services/product-service";
import { useCart } from "../../hooks/useCart";

function ProductDetail() {
  const param = useParams()
  const [data , setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const productDetail = await getProductDetail(param.id);
        setData(productDetail);
      }catch(err){
        setError(err.message)
      }finally{
        setLoading(false)
      }
    }

    fetchData()
  },[param.id])

  if(loading){
    return <p>Loading....</p>
  }

  if(error){
    return <p>Something went wrong. Please try again.</p>
  }

  const handleAddToCart = (product) => {
    // Add the product to the cart
    addToCart(data);
  }
  return (
    <div>
      Title: {data.title}<br/>
      <img src={data.image} alt={data.title}></img><br/>
      ${data.price}<br/>
      {data.category}<br/>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= Math.round(data.rating.rate) ? "⭐" : "☆"}  
        </span>
      ))}({data.rating.rate})<br/>
      {data.rating.count} Reviews<br/>
      Description:<br/>
      {data.description}<br/>
      <button onClick={handleAddToCart(data)}>Add To Cart</button>

    </div>
  )
}

export default ProductDetail