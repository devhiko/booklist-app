import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {

  const { addBook } = useContext(BookContext);

  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // refactored for readability

  const [inputs, setInputs] = useState({});

  const { title, author } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setInputs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ textAlign: 'center' }}>Add Some Book</h1>
      <input
        type="text"
        name='author'
        value={author || ''}
        onChange={handleChange}
        placeholder='Book Author'
        required
      />
      <input
        type="text"
        name='title'
        value={title || ''}
        onChange={handleChange}
        placeholder='Book Title'
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
}

export default NewBookForm;
