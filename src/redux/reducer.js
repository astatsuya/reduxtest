import { combineReducers } from 'redux';
import { ADD_INFO, SORT, FILTER } from './actions';

const initialState = {
  book: [
    {
      title: 'ccc ',
      age: 100,
      id: 0,
    },
    {
      title: 'bbb ',
      age: 300,
      id: 1,
    },
    {
      title: 'aaa ',
      age: 200,
      id: 2,
    },
  ],
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
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

export const sort = (state = { sort: 'ALL' }, action) => {
  switch (action.type) {
    case SORT:
      return action.sort;
    default:
      return state;
  }
};

export const filter = (state = { filter: 'ALL' }, action) => {
  switch (action.type) {
    case FILTER:
      return action.filter;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  books,
  sort,
  filter,
});

export default rootReducer;
