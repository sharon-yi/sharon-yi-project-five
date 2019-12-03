import React, { Component } from 'react';
import GetCheckboxInfo from './GetCheckboxInfo';


class ClearAllCheckbox extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
//   deleteHabit = habitId => {
//     const dbRef = firebase.database().ref();
//     dbRef.child(habitId).remove();
//   }

//   <span
//   id={habitValue.habitId}
//   className="deleteHabit"
//   onClick={() => this.deleteHabit(habitValue.habitId)}>
//   <i className="fas fa-trash-alt"></i>
// </span>

  render() {
    return (
      <div>
        <button className="resetWeeks">Start new week</button>
      </div>
    )
  }
}

export default ClearAllCheckbox;

