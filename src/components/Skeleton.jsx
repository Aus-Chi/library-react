import React from 'react'

function Skeleton() {
  return (
    <div>
      <div className="book-skeleton">
        <div className="book-skeleton__img--wrapper">
         {/* <Link to={`/books/${val.id}`}><img src={val.url} alt="" className="book__img" /></Link> */}
        </div>
       <div className="book-skeleton__title">
        {/* {val.title} */}
        </div>
        <div className="skeleton-rating">
            {/* <Rating rating={val.rating} /> */}
</div>
        <div className="skeleton-price">
            {/* {<Price salePrice={val.salePrice} originalPrice={val.originalPrice} />} */}
            </div>
      </div>
    </div>
  )
}

export default Skeleton
