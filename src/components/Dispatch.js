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
    title: 'dis ',
    age: 252,
    id: 4,
  };
  return (
    <div>
      <button type="button" onClick={() => addInfo(dispatchContents)}>
        addInfo
      </button>
    </div>
  );
};

const Dispatch = connect(null, mapDispatchToProps)(Connectedbutton);

export default Dispatch;
