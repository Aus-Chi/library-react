import HeaderImage from '../assets/Undraw_Books.svg'


function Landing(){
    
    return (
        <>
        <section id="landing">
        <header>
            <div className="container">
                <div className="row landing__row">
                    <h1 className="header__heading">
                        <span className="purple">
                            Canada's most awarded online library platform
                        </span>
                    </h1>
                    <p className="header__para">Find your dream book with Library</p>
                    <a href="#featured__books"><button className="btn">Browse books</button></a>
                    <figure className="header__img--wrapper">
                        <img src={HeaderImage} alt="" className="header__img" />
                    </figure>
                </div>
            </div>
        </header>
    </section>
    </>
    )

}

export default Landing