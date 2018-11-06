import React from 'react';
import { connect } from 'react-redux';
import { addInfo } from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    addInfo: info => dispatch(addInfo(info)),
  };
};

const Connectedbutton = ({ addInfo }) => {
  const dispatchContents = {
    title: 'dispatch ',
    age: 252,
  };
  return (
    <div>
      <br />
      addInfo
      <button onClick={() => addInfo(dispatchContents)}>
        add title
      </button>
      <br />
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

const Dispatch = connect(null, mapDispatchToProps)(Connectedbutton);

export default Dispatch;
