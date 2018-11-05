export const ADD_INFO = 'ADD_INFO';
// export const NEW_ID = 'NEW_ID';
export const FILTER = 'FILTER';

// let currentId = 3;
//
// const newId = () => {
//   return currentId++;
// };

export const addInfo = info => ({
  type: ADD_INFO,
  payload: info,
  // actionid: newId(),
});

export const filter = filtercase => ({
  type: FILTER,
  filter: filtercase,
});

//
// import uuid from 'uuid';
//
// export const ADD_BOOK = 'ADD_BOOK';
// export const REMOVE_BOOK = 'REMOVE_BOOK';
// export const FILTER_TEXT = 'FILTER_TEXT';
//
// export const addBook = ({
//   title = '',
//   description = '',
//   author = '',
//   published = 0,
// } = {}) => ({
//   type: 'ADD_BOOK',
//   book: {
//     id: uuid(),
//     title,
//     description,
//     author,
//     published,
//   },
// });
//
// export const removeBook = ({ id } = {}) => ({
//   type: 'REMOVE_BOOK',
//   id,
// });
//
// export const filterText = (text = '') => ({
//   type: 'FILTER_TEXT',
//   text,
// });
