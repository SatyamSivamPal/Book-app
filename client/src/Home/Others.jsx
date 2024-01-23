import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';


const Others = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(5, 12)))
    })

  return (
    <div>
        <BookCards books={books} headline = "Other Books" />
    </div>
  )
}

export default Others