import { v4 as uuidv4 } from 'uuid';

/* -------------------------------------------------------------------------- */

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const bookReducer = (state, { id, type, book = {} }) => {
  const { title, author } = book;

  switch (type) {
    case ADD_BOOK:
      return [...state, { id: uuidv4(), title, author }];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== id);
    default:
      return state;
  }
};
