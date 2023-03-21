import image from '../assets/book-1.jpeg'
import {books} from './data.js'
import Book from './Book.jsx'

function Featured() {

    return (
        <>
        <section id="featured__books">
            <div className="container">
                <div className="row">
                <h1 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h1>
                    <div className="books">
                        {
                            books.filter((b) => b.rating == 5).slice(0,4)
                            .map((book) => <Book val={book} key={book.id} />)
                        }
                       
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default Featured