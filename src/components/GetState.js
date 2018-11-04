import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    books: state.books.book,
  };
};

const Connectedbutton = ({ books }) => {
  return (
    <div>
      <br />
      stateをそのまま表示
      <p>
      {books.map(book => book.title)}
      </p>
      <p>
      {books.map(book => book.age)}
      </p>
      
    </div>
  );
};

// class Connectedbutton extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this
//   }
// }

const GetState = connect(mapStateToProps)(Connectedbutton);

export default GetState;
