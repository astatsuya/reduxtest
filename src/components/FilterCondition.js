import React from 'react';

class FilterCondition extends React.Component {
  constructor(props) {
    super(props);

    this.sortChange = this.sortChange.bind(this);
    this.filterChange = this.filterChange.bind(this);
  }

  sortChange(event) {
    const sortContents = event.target.value;

    this.props.sortChange(sortContents);
  }

  filterChange(event) {
    const filterContents = event.target.value;

    this.props.filterChange(filterContents);
  }

  render() {
    return (
      <div>
        Sort:
        <select id="sortContents" onChange={this.sortChange}>
          <option value="ALL">ALL</option>
          <option value="BOOKS">BOOKS</option>
          <option value="AGE">AGE</option>
        </select>
        <br />
        filter:
        <select id="filterContents" onChange={this.filterChange}>
          <option value="ALL">ALL</option>
          <option value="aaa ">aaa </option>
          <option value="bbb ">bbb</option>
        </select>
      </div>
    );
  }
}


export default FilterCondition;
