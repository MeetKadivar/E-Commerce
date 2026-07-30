import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductDetail } from "../../services/product-service";

function ProductDetail() {
  const param = useParams()
  const [data , setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  },[param])

  if(loading){
    return <p>Loading....</p>
  }

  if(error){
    return <p>Something went wrong. Please try again.</p>
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
      <button>Add To Cart</button>

    </div>
  )
}

export default ProductDetail