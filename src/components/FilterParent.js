import React from 'react';
import { connect } from 'react-redux';
import { filter } from '../redux/actions';
import FilterCondition from './FilterCondition';
import FilterButton from './FilterButton';

const mapDispatchToProps = (dispatch) => {
  return {
    filterChange: filtercase => dispatch(filter(filtercase)),
  };
};

class FilterParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'ALL',
    };

    this.changeCondition = this.changeCondition.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeCondition(event) {
    this.setState({
      filter: event,
    });
  }

  handleClick() {
    const filter = this.state.filter;
    console.log(filter);
    this.props.filterChange(filter)
  }

  render() {
    return (
      <div>
        <FilterCondition onChange={this.changeCondition} />
        <FilterButton onClick={this.handleClick} filterContents={this.state.filter}/>
      </div>
    );
  }
}

const FilterLink = connect(
  null,
  mapDispatchToProps,
)(FilterParent);

export default FilterLink;
