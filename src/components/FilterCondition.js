import React from 'react';

class FilterCondition extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const filterContents = event.target.value;
    this.props.onChange(filterContents);
  }

  render() {
    return (
      <div>
        <select id="filterContents" onChange={this.handleChange}>
          <option value="ALL">ALL</option>
          <option value="BOOKS">BOOKS</option>
          <option value="AGE">AGE</option>
        </select>
      </div>
    );
  }
}


export default FilterCondition;
