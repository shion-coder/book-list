import React, { useContext } from 'react';

import { BookContext } from 'contexts/book-context';

import BookDetails from 'components/book-details/book-details.component';

import { Wrapper, Container, Empty } from './book-list.styles';

/* -------------------------------------------------------------------------- */

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <Wrapper>
      <Container>
        {books.map(book => (
          <BookDetails key={book.id} book={book} />
        ))}
      </Container>
    </Wrapper>
  ) : (
    <Empty>No books to read.</Empty>
  );
};

export default BookList;
