import React from 'react';

import Navbar from 'components/navbar/navbar.component';
import BookList from 'components/book-list/book-list.components';
import BookForm from 'components/book-form/book-form.component';

import { Container } from './app.styles';

/* -------------------------------------------------------------------------- */

const App = () => (
  <Container>
    <Navbar />
    <BookList />
    <BookForm />
  </Container>
);

/* -------------------------------------------------------------------------- */

export default App;
