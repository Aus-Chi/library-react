
import {Link} from 'react-router-dom'
import Rating from './Rating.jsx'
import Price from './Price.jsx'

function Book({val}) {
  return (
    <>
      <div className="book">
        <figure className="book__img--wrapper">
         <Link to={`/books/${val.id}`}><img src={val.url} alt="" className="book__img" /></Link>
        </figure>
       <p className="book__title">{val.title}</p>
        <p className="rating">
            <Rating rating={val.rating} />
</p>
        <p className="price">{<Price salePrice={val.salePrice} originalPrice={val.originalPrice} />}</p>
      </div>
    </>
  );
}

export default Book;
