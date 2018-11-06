import React from 'react';
import FilterCondition from './FilterCondition';
import FilterButton from './FilterButton';

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


export default FilterParent;
