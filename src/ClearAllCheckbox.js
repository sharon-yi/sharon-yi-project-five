import React, { Component } from 'react';
import firebase from './firebase';

class ClearAllCheckbox extends Component {

  handleOnClear = (e) => {
    const dbRef = firebase.database().ref();

    this.props.habitTracker.forEach((habit) => {
      dbRef.child(habit.habitId).child('sunday').set(false);
      dbRef.child(habit.habitId).child('monday').set(false);
      dbRef.child(habit.habitId).child('tuesday').set(false);
      dbRef.child(habit.habitId).child('wednesday').set(false);
      dbRef.child(habit.habitId).child('thursday').set(false);
      dbRef.child(habit.habitId).child('friday').set(false);
      dbRef.child(habit.habitId).child('saturday').set(false);
    })
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

