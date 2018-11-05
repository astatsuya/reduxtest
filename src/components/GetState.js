import React from 'react';
import { connect } from 'react-redux';


const Connectedbutton = ({ books }) => {
  let showing = 1;

  const eee = () => {
    books.sort((a, b) =>  a.age - b.age);
    console.log('ci');
  };

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
        {eee()}
      </p>
      <br />
      <p>
        <button onClick={eee} >filter</button>
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
