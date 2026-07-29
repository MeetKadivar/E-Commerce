import React from 'react'
import './ProductCard.css'

function ProductCard({data}) {

  return (
    <div className='product-card'>
        <img src={data.image}></img><br></br>
        Title: {data.title}<br></br>
        Description : {data.description}<br></br>
        Category : {data.category}<br></br>
        Rating: {data.rating.rate} / 5 ({data.rating.count})


    </div>
  )
}

export default ProductCard