import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>{books.map(book => {
        return (<BookDetails key={book.id} book={book} />)
      })}
      </ul>
    </div>
  ) : (<div className="empty" style={{ textAlign: "center", padding: "10px" }}> You read all. Have fun!</div >);
}

export default BookList;
