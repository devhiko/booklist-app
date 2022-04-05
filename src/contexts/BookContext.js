import React, { createContext, useState } from 'react';
import { v1 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'origin', author: 'dan brown', id: 1 },
    { title: 'red monday', author: 'g.g. marquez', id: 2 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: v1() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
