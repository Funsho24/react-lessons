import React from 'react'

const Book = ({ book }) => {
    return (
        <div className='Book'>
            <h3>Title :{book.title}</h3>
            <h5>Pages :{book.pages}</h5>
            <h6>Author :{book.author}</h6>
            <h6>Year of release :{book.datereleased}</h6>
        </div>
    )
}
const Books = () => {
    const Booklists = [
        { id: 1, title :"things fall apart", pages : "200", author : "chinua achebe", datereleased : "1980" },
        { id: 2, title : "Sugar Girl", pages :"350", author : "Zainab", datereleased : "1996" },
        { id: 3, title : "Jack Sparrow", pages : "700", author : "Ola", datereleased :"1978" },
        { id: 4, title : "Tarzan", pages : "1000", author : "Oretimofe", datereleased : "2000" }
    ];
  return (
      <div className='Books'>
          <h3>BestSelling Books</h3>
          {Booklists.map((book) => {
              return <Book key ={book.id} book={book} />
          })}
          
      
      </div>
  )
}

export default Books