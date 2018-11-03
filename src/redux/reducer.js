import { combineReducers } from 'redux';
import { ADD_BOOK, REMOVE_BOOK, FILTER_TEXT } from './actions';

const booksReducerDefaultState = [];

const booksReducer = (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'title',
  startYear: undefined,
  endYear: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case FILTER_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  booksReducer,
  filtersReducer,
});

export default rootReducer;


// import { combineReducers } from 'redux';
// import { ADD_INFO } from './actions';
//
// const initialState = {
//   articles: [],
// };
//
// const books = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_INFO:
//       return {
//         ...state,
//         articles: [
//           ...state.articles,
//           action.payload,
//         ],
//       };
//     default:
//       return state;
//   }
// // };
//
// const rootReducer = combineReducers({
//   books,
// });
//
// export default rootReducer;
