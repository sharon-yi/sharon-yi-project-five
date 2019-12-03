import React, { Component } from 'react';
import firebase from './firebase';
import AddHabit from './AddHabit';

class ClearAllCheckbox extends Component {
constructor() {
  super();
  this.state = {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false
  }
}

  handleOnClear = (e) => {
    const dbRef = firebase.database().ref();

    for (let i = 0; i < this.props.habitTracker.length; i++) {
      // this.props.habitTracker[i].habitName
      const sunday = this.props.habitTracker[i].habitName.sunday
      const monday = this.props.habitTracker[i].habitName.monday
      const tuesday = this.props.habitTracker[i].habitName.tuesday
      const wednesday = this.props.habitTracker[i].habitName.wednesday
      const thursday = this.props.habitTracker[i].habitName.thursday
      const friday = this.props.habitTracker[i].habitName.friday
      const saturday = this.props.habitTracker[i].habitName.saturday

      // const clearDays = {

      // }

      dbRef.set(sunday)

    }

    // this.props.habitTracker[i].habitName.sunday = false,
    //   this.props.habitTracker[i].habitName.monday = false,
    //   this.props.habitTracker[i].habitName.tuesday = false,
    //   this.props.habitTracker[i].habitName.wednesday = false

  }

  render() {
    return (
      <div>
        <button className="resetWeeks" onClick={this.handleOnClear}>Start new week</button>
      </div>
    )
  }
}

export default ClearAllCheckbox;

