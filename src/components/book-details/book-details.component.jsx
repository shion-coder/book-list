import React, { useContext } from 'react';

import { BookContext } from 'contexts/book-context';
import { REMOVE_BOOK } from 'reducers/book-reducer';

import { Book, Title, Author } from './book-details.styles';

/* -------------------------------------------------------------------------- */

const BookDetails = ({ book: { id, title, author } }) => {
  const { dispatch } = useContext(BookContext);

  return (
    <Book onClick={() => dispatch({ type: REMOVE_BOOK, id })}>
      <Title>{title}</Title>
      <Author>{author}</Author>
    </Book>
  );
};

/* -------------------------------------------------------------------------- */

export default BookDetails;
