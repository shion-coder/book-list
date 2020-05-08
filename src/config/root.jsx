import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Theme from 'config/theme';

import App from 'containers/app/app.container';

import BookContextProvider from 'contexts/book-context';

import { GlobalStyles } from 'utils/styles/global-styles';

/* -------------------------------------------------------------------------- */

const Root = () => (
  <Theme>
    <GlobalStyles />

    <Router>
      <StylesProvider injectFirst>
        <BookContextProvider>
          <App />
        </BookContextProvider>
      </StylesProvider>
    </Router>
  </Theme>
);

/* -------------------------------------------------------------------------- */

export default Root;
