export const ADD_INFO = 'ADD_INFO';
export const SORT = 'SORT';
export const FILTER = 'FILTER';

export const addInfo = info => ({
  type: ADD_INFO,
  payload: info,
});

export const sort = sortcase => ({
  type: SORT,
  sort: sortcase,
});

export const filter = filtercase => ({
  type: FILTER,
  filter: filtercase,
});
