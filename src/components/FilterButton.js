import React from 'react';
import { connect } from 'react-redux';
import { filter } from '../redux/reducer';

// const FilterButton = (props) => {
//   const tes = (props) => {
//     alert(props)
//   }
//
//   return (
//     <div>
//       <button onClick={tes(props.onClick)}>Filter</button>
//       <button>{props.onClick}</button>
//     </div>
//   );
// };

class FilterButton extends React.Component {
  constructor(props) {
    super(props);

    this.clickToParent = this.clickToParent.bind(this);
  }

  clickToParent() {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <button >Filter</button>
        <button onClick={this.clickToParent}>
          {this.props.filterContents}
        </button>
      </div>
    )
  }
}


export default FilterButton;
