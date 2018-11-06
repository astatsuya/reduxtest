import React from 'react';
import { connect } from 'react-redux';
import { sort, filter } from '../redux/actions';
import FilterParent from './FilterButton';

const mapDispatchToProps = (dispatch) => {
  return {
    sortChange: sortcase => dispatch(sort(sortcase)),
    filterChange: filtercase => dispatch(filter(filtercase)),
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterParent);

export default FilterLink;
