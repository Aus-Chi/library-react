import { books } from '../components/data.js'
import Book from '../components/Book.jsx'
import React, { useEffect, useState } from 'react'

function Books(){

    const [unsortedBooks, setBooks] = useState(books)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    function sortBooks(filter){
        
        if(filter === "LOW_TO_HIGH"){
            setBooks(unsortedBooks.slice().sort((a,b) => {
                return (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)}))
        }

        else if(filter === "HIGH_TO_LOW"){
            setBooks(unsortedBooks.slice().sort((a,b) => {
                return (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)}))
        }

        else{
            setBooks(unsortedBooks.slice().sort((a,b) => {
                return a.rating - b.rating
            }))
        }
    }

    return(
        <>
        <section id="books">
            <div className="container">
                <div className="row">
                    <div className="all__books--header">
                    <h1 className="section__heading">
                        All <span className="purple">Books</span>
                    </h1>
                    <select id="filter" defaultValue="DEFAULT" onChange={(event) => sortBooks(event.target.value)}>
                        <option value="DEFUALT" disabled>sort</option>
                        <option value="LOW_TO_HIGH">Price, Low to High</option>
                        <option value="HIGH_TO_LOW">Price, High to Low</option>
                        <option value="Rating">Rating</option>
                    </select>
                    </div>
                    <div className="books">
                        {
                            unsortedBooks.map((book) => {
                            return <Book val={book} key={book.id} />})
                        }
                    </div>
                 
                </div>
            </div>
        </section>
        </>
    )

}

export default Books