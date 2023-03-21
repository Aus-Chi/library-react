
let books;

async function renderBooks(filter){

    const featuredBooks = document.querySelector(`.books`)

    if(!books){
        books = await getBooks();
    }

    if(filter === 'LOW_TO_HIGH'){
        books.sort((a,b) => {
            return (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
        })
    }
    else if(filter === 'HIGH_TO_LOW'){
        books.sort((a,b) => {
         return (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
        })
    }

    else if(filter === 'RATING'){
        books.sort((a,b) => a.rating - b.rating)
    }

    let booksHTML = books.map(book => {
        return `<div class="book books-html">
        <figure class="book__img--wrapper">
            <img src="${book.url}" alt="" class="book__img">
        </figure>
        <p class="book__title">${book.title}</p>
        <div class="book__rating">
          ${ratingsHtml(book.rating)}
        </div>
       ${displayPrice(book.salePrice, book.originalPrice)}
    </div>`
    })

    featuredBooks.innerHTML = booksHTML.join('')


}

function displayPrice(salePrice, originalPrice){
    if(salePrice === null){
        return `<p class="book__price">$${originalPrice.toFixed(2)}</p>`
    }
    else{
        return `<p class="book__price"><span class="original-price">$${originalPrice.toFixed(2)}</span>$${salePrice.toFixed(2)}</p>`
    }
}

function ratingsHtml(rating){
    let ratingHtml = "";

    for(let i = 0; i < Math.floor(rating); i++){
        ratingHtml +=  '<i class="fas fa-star"></i>'
    }

    if(Math.floor(rating) < rating){
        ratingHtml += '<i class="fas fa-star-half-alt"></i>'
    }

    if(Math.ceil(rating) < 5){
        for(let i = Math.ceil(rating); i < 5; i++){
            ratingHtml += '<span class="empty__rating"><i class="fas fa-star"></i></span>'
        }
    }

    return ratingHtml;

}

function filterBooks(event){
    renderBooks(event.target.value)

}

setTimeout(() => {
    renderBooks();
})

// FAKE DATA
function getBooks() {
  return  new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve([
                {
                  id: 1,
                  title: "Crack the Coding Interview",
                  url: "assets/crack the coding interview.png",
                  originalPrice: 49.95,
                  salePrice: 14.95,
                  rating: 4.5,
                },
                {
                  id: 2,
                  title: "Atomic Habits",
                  url: "assets/atomic habits.jpg",
                  originalPrice: 39,
                  salePrice: 45,
                  rating: 5,
                },
                {
                  id: 3,
                  title: "Can't Hurt Me",
                  url: "assets/david goggins.jpeg",
                  originalPrice: 14.95,
                  salePrice: 30,
                  rating: 3.5
                },
                {
                  id: 3,
                  title: "Deep Work",
                  url: "assets/deep work.jpeg",
                  originalPrice: 29,
                  salePrice: 12,
                  rating: 5,
                },
                {
                  id: 4,
                  title: "The 10X Rule",
                  url: "assets/book-1.jpeg",
                  originalPrice: 44,
                  salePrice: 19,
                  rating: 4.5,
                },
                {
                  id: 5,
                  title: "Be Obsessed Or Be Average",
                  url: "assets/book-2.jpeg",
                  originalPrice: 32,
                  salePrice: 17,
                  rating: 4,
                },
                {
                  id: 6,
                  title: "Rich Dad Poor Dad",
                  url: "assets/book-3.jpeg",
                  originalPrice: 70,
                  salePrice: 12.5,
                  rating: 5,
                },
                {
                  id: 7,
                  title: "Cashflow Quadrant",
                  url: "assets/book-4.jpeg",
                  originalPrice: 11,
                  salePrice: 10,
                  rating: 4,
                },
                {
                  id: 8,
                  title: "48 Laws of Power",
                  url: "assets/book-5.jpeg",
                  originalPrice: 38,
                  salePrice: 17.95,
                  rating: 2.5,
                },
                {
                  id: 9,
                  title: "The 5 Second Rule",
                  url: "assets/book-6.jpeg",
                  originalPrice: 35,
                  salePrice: null,
                  rating: 4,
                },
                {
                  id: 10,
                  title: "Your Next Five Moves",
                  url: "assets/book-7.jpg",
                  originalPrice: 40,
                  salePrice: null,
                  rating: 4,
                },
                {
                  id: 11,
                  title: "Mastery",
                  url: "assets/book-8.jpeg",
                  originalPrice: 30,
                  salePrice: null,
                  rating: 4.5,
                },
            
              ])
        }, 3000)
        
    })
        
  }
  


