import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="book-specs">{book.author} {book.title}</div>
    </li>
  );
}

export default BookDetails;