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
  filter,
});

export default rootReducer;
