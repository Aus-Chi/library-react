import logo from '../assets/Library.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Arrow from '../assets/arrow-up-solid.svg'
import React, { Link } from 'react-router-dom'

function Footer(){

    return(
        <>
        <footer>
            <div className="container">
                <div className="row">
                    <figure className="footer__logo--wrapper">
                    <a href="#nav"><img src={logo} alt="" className="logo footer__logo" />
                   <span className='goUp'>Top↑</span></a>
                    </figure>
                   <ul className="footer__links">
                   <Link to="/"> <li className="footer__link">
                        Home
                    </li></Link>
                    <li className="footer__link about">
                        About
                    </li>
                    <Link to="/books"><li className="footer__link">
                        Books
                    </li></Link>
                   
                   </ul>
                   <p className="copy-right">Copyright &copy; 2022 Library</p>
                </div>
            </div>
        </footer>
        </>
    )

}

export default Footer