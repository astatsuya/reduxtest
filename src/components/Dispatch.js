import React from 'react';
import { connect } from 'react-redux';
import { addInfo } from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    addInfo: info => dispatch(addInfo(info)),
  };
};

const Connectedbutton = ({addInfo}) => {
  return (
    <div>
      Dispatch
      <button onClick={() => addInfo({title: 'dispatchfromReact'})} />
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
