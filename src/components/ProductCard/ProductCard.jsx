import {useNavigate} from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ data }) {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  }

  return (
    <div className='product-card'>
      <img src={data.image} alt={data.title}></img><br></br>
      Title: {data.title}<br></br>
      Price: {data.price}<br></br>
      Category : {data.category}<br></br>
      <button onClick={() => {handleClick(data.id)}}>View Details</button>


    </div>
  )
}

export default ProductCard