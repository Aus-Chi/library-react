import { books } from '../components/data.js'
import Book from '../components/Book.jsx'


function Latest(){

    return(
        <>
        
        <section id="latest">
            <div className="container">
                <div className="row latest__row">
                    <h1 className="section__title">
                        Latest <span className="purple">Books</span>
                    </h1>
                    <div className="books">
                        {
                            books.filter((book) => book.salePrice != null).slice(0,8)
                            .map((book) => <Book val={book} key={book.id} />)
                        }
                    </div>
                </div>
            </div>
        </section>

        </>
    )

}

export default Latest