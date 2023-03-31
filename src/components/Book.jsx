import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import Rating from './Rating.jsx'
import Price from './Price.jsx'
import Skeleton from './Skeleton.jsx'

function Book({val}) {

  const [img, setImg] = useState();

  // When we switch routes dont set image to unmounted component
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = val.url;
    image.onload = () => {
      setTimeout(() => {
         {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      // When the component unmounts 
      mountedRef.current = false;
    };
  }, [val.url]);

  return (
    <>
    {
      !img? <Skeleton /> : (
    
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
      )
      }
    </>
  );
}

export default Book;
