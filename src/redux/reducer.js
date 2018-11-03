import { ADD_INFO } from './actions';

const initialState = {
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        ...state,
        articles: [
          ...state.articles,
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
