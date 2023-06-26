import { useEffect } from 'react';
import EmptyCart from '../assets/empty_cart.svg'
import {Link} from 'react-router-dom'

function Cart({cart,quantityUpdated, removeItem}){

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    let subTotal = 0;
    function calcSubTotal(){
       let value = 0
        cart.forEach((book) => {
          value += book.salePrice ? book.salePrice * book.quantity : book.originalPrice * book.quantity
        })
      
        return value;
     
      }

      subTotal = calcSubTotal()
    
      let tax = 0
      function calcTax(){
        return 15 * (calcSubTotal()/100)
      }

      tax = calcTax()
    
      let total
       function calcTotal(){
        return calcSubTotal() + calcTax()
       }

       total = calcTotal()

    return (
        <>
        <section id="cart">
            <div className="cart__container">
                <div className="cart__row">
                    <div className="cart__headings">
                        <h3 className="cart__heading">Book</h3>
                        <h3 className="cart__heading">Quantity</h3>
                        <h3 className="cart__heading">Price</h3>
                    </div>
                    <div className="cart__books">
                        
                            {
                                cart.map((book) =>  {
                                    
                              return(  
                                <div className="cart__book">
                            <figure className="cart__book--wrapper">
                            <img src={book.url} alt="" className="cart__book--img" />
                            <div className='cart__book--info'><p className="book__title--cart">{book.title}</p>
                            <div className="book__price">${(book.salePrice ? book.salePrice : book.originalPrice).toFixed(2)}</div>
                            <button className='remove__book' onClick={() => removeItem(book)}>Remove</button>
                            </div>
                            </figure>
                            <input type="number" max={99} min={0} className='quantity__input' value={book.quantity} onChange={(event) => quantityUpdated(event.target.value, book)}/>
                            <p className="cart__book--price">${(book.quantity * (book.salePrice ?  book.salePrice : book.originalPrice)).toFixed(2)}</p>
                                </div>
                              )
                                } )
                            }
                           
                        
                    </div>
                            {
                                cart.length > 0 ? 
                     (       
                    <div className="total__calculations">
                       
                        <div className="sub__total">
                            <p className="sub__total--heading">Subtotal</p>
                            <p className="sub__total--value">${subTotal.toFixed(2)}</p>
                        </div>
                        <div className="tax">
                            <p className="tax__heading">Tax</p>
                            <p className="tax__value">${`${tax.toFixed(2)}`}</p>
                        </div>
                        <div className="total">
                            <p className="total__heading">Total</p>
                            <p className="total__value">${`${total.toFixed(2)}`}</p>
                        </div>
                        <div className="checkout__btn btn">Proceed to checkout</div>
                    </div>

                            ) : 
                            
                            (
                                <figure className="empty__cart--image-wrapper">
                                    <img src={EmptyCart} alt="" className="empty__cart--image" />
                                    <h1 className='emprt__cart--message'>You Don't have any Book in your Cart</h1>
                                   <Link to="/books"> <button className='btn leave__cart' >Browse books</button></Link>
                                </figure>
                            )
                            
                            }
                </div>
            </div>
        </section>
        </>
    )

}

export default Cart