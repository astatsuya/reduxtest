import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    addInfo: state.addInfo,
  };
};

const Connectedbutton = ({ addInfo }) => {
  return (
    <div>
      GetState
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
