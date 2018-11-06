import React from 'react';
import { connect } from 'react-redux';
// import changeViewState from './changeViewState';


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
      return state.filter(a => a.title === "aaa ");
    case 'bbb ':
      return state.filter(a => a.age === "bbb ");
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  return {
    sorted: changeViewState(state.books.book, state.sort),
    filtered: changeFilter(state.books.book, state.filter),
  }
};



const Connectedbutton = ({ sorted, filtered }) => {
  return (
    <div>
      <br />
      stateをそのまま表示
      <p>
        {sorted.map(book => book.title)}
      </p>
      <p>
        {sorted.map(book => book.age)}
      </p>
      <p>
        {filtered.map(book => book.title)}
      </p>
      <p>
        {filtered.map(book => book.age)}
      </p>
      <p>

      </p>

      <br />
    </div>
  );
};


const GetState = connect(mapStateToProps)(Connectedbutton);

export default GetState;
