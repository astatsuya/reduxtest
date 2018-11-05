// import { combineReducers } from 'redux';
// import { ADD_BOOK, REMOVE_BOOK, FILTER_TEXT } from './actions';
//
// const booksReducerDefaultState = [];
//
// const booksReducer = (state = booksReducerDefaultState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return [
//         ...state,
//         action.book,
//       ];
//     case REMOVE_BOOK:
//       return state.filter(({ id }) => id !== action.id);
//     default:
//       return state;
//   }
// };
//
// const filtersReducerDefaultState = {
//   text: '',
//   sortBy: 'title',
//   startYear: undefined,
//   endYear: undefined,
// };
//
// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case FILTER_TEXT:
//       return {
//         ...state,
//         text: action.text,
//       };
//     default:
//       return state;
//   }
// };
//
// const rootReducer = combineReducers({
//   booksReducer,
//   filtersReducer,
// });
//
// export default rootReducer;


import { combineReducers } from 'redux';
import { ADD_INFO, FILTER } from './actions';

const initialState = {
  book: [
    {
      title: '1st ',
      age: 100,
      // id: 0,
    },
    {
      title: '2nd ',
      age: 300,
      // id: 1,
    },
    {
      title: '3rd ',
      age: 200,
      // id: 2,
    },
  ],
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      // let newPayload = action.payload;
      // newPayload.id = action.actionid;

      return {
        ...state,
        book: [
          ...state.book,
          action.payload,
        ],
      };
    default:
      return state;
  }
};

const filter = (state = { filter: 'ALL' }, action) => {
  switch (action.type) {
    case FILTER:
      return Object.assign({}, state, {
        filter: action.info,
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  books,
  filter,
});

export default rootReducer;
