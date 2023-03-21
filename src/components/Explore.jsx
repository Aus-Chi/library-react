import React, { Link } from 'react-router-dom'


function Explore(){

    return(
        <>
        <section id="explore">
            <div className="container">
                <div className="row">
                    <h1 className="section__heading explore_heading">
                        Explore more <span className="purple">Books</span>
                    </h1>
                    <Link to="/books"><button className="btn">Browse books</button></Link>
                </div>
            </div>
        </section>
        </>
    )

}

export default Explore