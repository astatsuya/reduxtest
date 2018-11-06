import React from 'react';
import { connect } from 'react-redux';
import { filter } from '../redux/reducer';


// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }



const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(filter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  null,
  mapDispatchToProps,
)(Link)

export default FilterLink;
