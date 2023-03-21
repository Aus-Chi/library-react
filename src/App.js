import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import React, { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Books from './pages/Books.jsx'
import Footer from './components/Footer.jsx'
import BookInfo from './pages/BookInfo.jsx'
import Cart from './pages/Cart.jsx'
import { useState, useEffect } from 'react'

function App() {

  const [cart, setCart] = useState([])


  function addToCart(book){
    
    setCart([...cart, {...book, quantity: 1}])
    

  }

  function quantityUpdated(quantity, book){
      setCart(cart.map((item) => 
      (+item.id === +book.id) ?

        {
          ...item,
          quantity: +quantity,
        }
      
      :
      
      item
      
    
    ))
   
  }

  function removeItem(book){
    setCart(cart.filter((item) => +item.id !== +book.id))
  }


  return (
    <div className="App">
      <Router>
      <Nav cart={cart} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" exact element={<Books />} />
      <Route path="/books/:id" exact element={<BookInfo addToCart={addToCart} cart={cart} />} />
      <Route path="/cart" exact element={<Cart cart={cart} quantityUpdated={quantityUpdated} removeItem={removeItem} />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
