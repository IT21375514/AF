import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <div key={book._id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price}</p>
          <p>Availability: {book.availability ? 'In Stock' : 'Out of Stock'}</p>
          <Link to={`/books/${book._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
