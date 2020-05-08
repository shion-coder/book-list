import React, { useContext } from 'react';

import { BookContext } from 'contexts/book-context';

import { Container } from './navbar.styles';

/* -------------------------------------------------------------------------- */

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <Container>
      <h1>Reading List</h1>
      <p>Currently you have {books.length} books to get through</p>
    </Container>
  );
};

export default Navbar;
