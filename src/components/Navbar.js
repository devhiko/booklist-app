import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Book Shelf</h1>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <p>{books.length} books remaining</p>
    </div>
  );
}

export default Navbar;
