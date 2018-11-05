import React from 'react';
import { connect } from 'react-redux';


const Connectedbutton = ({ books }) => {
  let showing ;
  if (showing) {
    books.sort((a, b) => a.title - b.title )
  } else {
    books.sort((a, b) => a.age - b.age)
  }

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
      <p>
        {books.age}
      </p>
      <br />
      <p>
        <button  >filter</button>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    books: state.books.book,
  };
};

const GetState = connect(mapStateToProps)(Connectedbutton);

export default GetState;
