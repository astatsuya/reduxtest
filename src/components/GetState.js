import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

const Connectedbutton = ({ books }) => {
  return (
    <div>
      GetState
      <p>
      {books.book.map(book => book.title)}
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
