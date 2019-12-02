import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import GetCheckboxInfo from './GetCheckboxInfo'

class AddHabit extends Component {
  constructor() {
    super();
    this.state = {
      habitTracker: [],
      userInput: '',
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const habits = snapshot.val();

      const newHabit = []
      for (let key in habits) {
        const habitObject = {
          habitId: key,
          habitName: habits[key]
        }
        newHabit.push(habitObject)
      }
      this.setState({
        habitTracker: newHabit
      })
    });
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const habitToAdd = this.state.userInput;

    const dbRef = firebase.database().ref();

    if (habitToAdd !== '') {
      const newHabitThing = {
        habitName: habitToAdd,
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
      }
      dbRef.push(newHabitThing)
      this.setState({
        userInput: ''
      })
    }
  }

  deleteHabit = habitId => {
    const dbRef = firebase.database().ref();
    dbRef.child(habitId).remove();
  }


  render() {
    return (
      <div>
        <ul>
          {this.state.habitTracker.map((habitValue, i) => {
            return (
              <div className="habitAndDelete" key={i}>
                <span
                  id={habitValue.habitId}
                  className="deleteHabit"
                  onClick={() => this.deleteHabit(habitValue.habitId)}>
                  <i className="fas fa-trash-alt"></i>
                </span>
                <ul className="habitItem">
                  <li>
                    {habitValue.habitName.habitName}
                    <GetCheckboxInfo habitValue={habitValue} />
                  </li>
                </ul>
              </div>
            )
          })}
        </ul>
        <form onSubmit={this.handleSubmit} className="addHabitInput">
          <label htmlFor="habitName"></label>
          <input id="habitName" type="text" onChange={this.handleChange} value={this.state.userInput} />
          <button type="submit">Add habit</button>
        </form>
      </div>
    )
  }
}

export default AddHabit;