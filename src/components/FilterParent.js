import React from 'react';
import { connect } from 'react-redux';
import { sort, filter } from '../redux/actions';
import FilterCondition from './FilterCondition';
import FilterButton from './FilterButton';

const mapDispatchToProps = (dispatch) => {
  return {
    sortChange: sortcase => dispatch(sort(sortcase)),
    filterChange: filtercase => dispatch(filter(filtercase)),
  };
};

class FilterParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'ALL',
      filter: 'ALL',
    };

    this.changeCondition = this.changeCondition.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filterChangeCondition = this.filterChangeCondition.bind(this);
    this.filterClick = this.filterClick.bind(this);
  }

  changeCondition(event) {
    this.setState({
      sort: event,
    });
  }

  filterChangeCondition(event) {
    this.setState({
      filter: event,
    });
  }

  handleClick() {
    const sort = this.state.sort;
    this.props.sortChange(sort)
  }

  filterClick() {
    const filter = this.state.filter;
    this.props.filterChange(filter)
  }

  render() {
    return (
      <div>
        <FilterCondition
          sortChange={this.changeCondition}
          filterChange={this.filterChangeCondition}
        />
        <FilterButton
          sortClick={this.handleClick}
          sortContents={this.state.sort}
          filterClick={this.filterClick}
          filterContents={this.state.filter}
        />
      </div>
    );
  }
}

const FilterLink = connect(
  null,
  mapDispatchToProps,
)(FilterParent);

export default FilterLink;
