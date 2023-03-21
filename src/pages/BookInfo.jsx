import { useParams, Link } from 'react-router-dom'
import { books } from '../components/data.js'
import Rating from '../components/Rating.jsx'
import Price from '../components/Price.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Book from '../components/Book.jsx'


function BookInfo({addToCart, cart}){

    const { id } = useParams()

    const book = books.find((book) => +book.id === +id)

    return (
        <>
       
            <section className="selected__book">
                <div className="selected__book-container">
              
                <div className="selected__book--description">
                    <figure className="selected__book--img-wrapper">
                    <Link to="/books" className="book__link"><FontAwesomeIcon icon="arrow-left" className='goBack' />Back</Link>
                        <img src={book.url} alt="" className="selected__book--img" />
                    </figure>
                    <div className="selected__book--info">
                        <h1 className="selected__book--title">
                            {book.title}
                        </h1>
                        <p className='rating'><Rating rating={book.rating} /></p>
                        <p>{<Price salePrice={book.salePrice} originalPrice={book.originalPrice} />}</p>
                        <h2 className="description__heading">
                            Summary
                        </h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat incidunt deleniti repudiandae. 
                            Fugiat earum totam, modi corporis ducimus reprehenderit nobis sunt eaque minus est alias deserunt consectetur. Odit, eos excepturi.
                        </p>
                        <p>&nbsp;</p>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi suscipit perspiciatis dolorem
                            iure deserunt nisi voluptate rerum ipsum? Voluptatibus accusamus exercitationem sunt corporis omnis 
                            consequatur enim dolore quo eveniet?
                        </p>
                        {
                            cart.find((item) => +item.id === book.id) ? (<Link to="/cart"><button className="btn desc__btn">Checkout</button></Link>) : <button className="btn desc__btn" onClick={() => addToCart(book)}>Add to cart</button>
                        }
                        
                    </div>
                </div>
                </div>
              
              <div className="recommended__books">
                <h1 className="section__title--rec">
                    Recommended <span className="purple">Books</span>
                </h1>
                <div className="rec__books--container">
                    <div className="rec__books--row">
                        <div className="books">
                            {
                                books.filter((book) => book.rating === 5 && +book.id != +id).slice(0,4).map((book) => <Book val={book} key={book.id} />)
                            }
                        </div>
                    </div>
                </div>
              </div>

            </section>
       
        </>
    )

}

export default BookInfo