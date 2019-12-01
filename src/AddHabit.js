import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
// import DeleteHabit from './DeleteHabit'


class AddHabit extends Component {
  constructor() {
    super();
    this.state = {
      habitTracker: [],
      userInput: ''
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
      dbRef.push(habitToAdd)
      this.setState({
        userInput: ''
      })
    }
  }

  deleteHabit = (e) => {
    const dbRef = firebase.database().ref();
    dbRef.child(e.target.id).remove()
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.habitTracker.map((habitValue, i) => {
            return (
              <li key={i}>
                <span id={habitValue.habitId} className="deleteIt" onClick={this.deleteHabit}>x</span>
                {habitValue.habitName}
              </li>
            )
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="habitName"></label>
          <input id="habitName" type="text" onChange={this.handleChange} value={this.state.userInput} />
          <button type="submit">Add habit</button>
        </form>
      </div>
    )
  }
}

export default AddHabit;