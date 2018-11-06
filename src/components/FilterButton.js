import React from 'react';
import { filter } from '../redux/reducer';

const FilterButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>FIlter</button>
    </div>
  );
};

// class FilterButton extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.clickToParent = this.clickToParent.bind(this);
//   }
//
//   clickToParent() {
//     this.props.onClick();
//   }
//
//   render() {
//     return (
//       <div>
//         <button >Filter</button>
//         <button onClick={this.clickToParent}>
//           {this.props.filterContents}
//         </button>
//       </div>
//     )
//   }
// }


export default FilterButton;
