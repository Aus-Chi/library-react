import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Highlight from './ui/Highlight.jsx'


function Highlights(){

    return (
        <>
        <section id="highlights">
            <div className="container">
                <div className="row highlights__row">
                
                    <h1 className="section__heading">
                        Why choose <span className="purple">Library</span>
                    </h1>
                    <div className="highlights">
                    <Highlight 
                    icon="bolt"
                    heading="Easy and Quick"
                    para="Get access to the book you purchased online instantly"
                    />
                    <Highlight 
                    icon="book-open"
                    heading="10,000+ Books"
                    para="Library has books in all your favourite categories."
                    />
                    <Highlight 
                    icon="tags"
                    heading="Affordable"
                    para="Get your hands on popular books for as little as $10."
                    />
                </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default Highlights