const changeViewState = (state, filter) => {
  switch (filter) {
    case 'ALL':
      return state;
    case 'BOOKS':
      return state.sort((a, b) => a.title - b.title);
    case 'AGE':
      return state.sort((a, b) => a.age - b.age);
    default:
      return state;
  }
};

export default changeViewState;
