
import './ProductCard.css'

function ProductCard({data}) {

  return (
    <div className='product-card'>
        <img src={data.image} alt={data.title}></img><br></br>
        Title: {data.title}<br></br>
        Price: {data.price}<br></br>
        Category : {data.category}<br></br>
      


    </div>
  )
}

export default ProductCard