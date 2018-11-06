import React from 'react';
import { connect } from 'react-redux';
import { filter } from '../redux/actions';
import FilterParent from './FilterButton';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filterChange: ownProps.filtercase => dispatch(filter(ownProps.filtercase)),
  };
};

const FilterLink = connect(
  null,
  mapDispatchToProps,
)(FilterParent);

export default FilterLink;
