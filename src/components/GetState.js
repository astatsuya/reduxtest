import React from 'react';
import { connect } from 'react-redux';

const changeViewState = (state, sort) => {
  switch (sort) {
    case 'ALL':
      return state.sort((a, b) => a.id - b.id);
    case 'BOOKS':
      return state.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    case 'AGE':
      return state.sort((a, b) => a.age - b.age);
    default:
      return state;
  }
};

const changeFilter = (state, filtered) => {
  switch (filtered) {
    case 'ALL':
      return state;
    case 'aaa ':
      return state.filter(a => a.title === 'aaa ');
    case 'bbb ':
      return state.filter(a => a.title === 'bbb ');
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  return {
    sorted: changeViewState(state.books.book, state.sort),
    filtered: changeFilter(state.books.book, state.filter),
    state,
  };
};

const Connectedbutton = ({ sorted, filtered }) => {
  return (
    <div>
      sortだけした結果
      <p>
        {sorted.map(book => book.title)}
      </p>
      <p>
        {sorted.map(book => book.age)}
      </p>
      sortしてfilterした結果
      <p>
        {filtered.map(book => book.title)}
      </p>
      <p>
        {filtered.map(book => book.age)}
      </p>
    </div>
  );
};

const GetState = connect(mapStateToProps)(Connectedbutton);

export default GetState;
