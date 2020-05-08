import React, { useContext, useState } from 'react';

import { BookContext } from 'contexts/book-context';
import { ADD_BOOK } from 'reducers/book-reducer';

import { Form, Input, Submit } from './book-form.styles';

/* -------------------------------------------------------------------------- */

const BookForm = () => {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: ADD_BOOK,
      book: {
        title,
        author,
      },
    });

    setTitle('');
    setAuthor('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Book Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <Input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} required />

      <Submit type="submit" value="Add Book" />
    </Form>
  );
};

/* -------------------------------------------------------------------------- */

export default BookForm;
