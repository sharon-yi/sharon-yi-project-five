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
              <div className="habitAndDelete">
                <span id={habitValue.habitId} className="deleteHabit" onClick={this.deleteHabit}><i class="fas fa-trash-alt"></i></span>
                <div className="habitItem">
                  <li key={i}>
                    {habitValue.habitName}
                  </li>
                  <form className="checkDate">
                    <input type="checkbox" className="individualCheckbox" name="" id=""/>
                    <input type="checkbox" className="individualCheckbox" name="" id="" />
                    <input type="checkbox" className="individualCheckbox" name="" id="" />
                    <input type="checkbox" className="individualCheckbox" name="" id="" />
                    <input type="checkbox" className="individualCheckbox" name="" id="" />
                    <input type="checkbox" className="individualCheckbox" name="" id="" />
                    <input type="checkbox" className="individualCheckbox" name="" id="" />
                  </form>
                </div>
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