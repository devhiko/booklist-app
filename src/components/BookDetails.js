import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';


const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="book-specs">{book.author} {book.title}</div>
    </li>
  );
}

export default BookDetails;
