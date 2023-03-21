import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/Library.svg'
import React, {  Link } from 'react-router-dom'

function Nav({cart}) {
    return (
       <nav id='nav'>
        <div className="nav__container">
            <div className="nav__row">
            <Link to="/"> <img src={logo} alt="" className="logo"/></Link>
               
           
            <ul className="nav__links">
                <li className="nav__list">
                   <Link to="/" className="nav__link">Home</Link>
                </li>
                <li className="nav__list">
                <Link to="/books" className="nav__link books__link">Books</Link>
                </li>
               
                   {/* <button className="btn__menu">
                    <FontAwesomeIcon icon="bars" />
                   </button>
               */}
                <li className="nav__list">
                  <Link to="/cart" className="nav__link">
                        <FontAwesomeIcon icon="shopping-cart" />
                   
                    <span className="cart__length">{cart.length}</span>
                    </Link>
                </li>
            </ul>
            {/* <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close">
                    
                </button>
            </div> */}
            </div>
        </div>
       </nav>
    )
}

export default Nav