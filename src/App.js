import React, { Component } from 'react';
// import firebase from './firebase';
import './App.css';
import Header from './Header';
import AddHabit from './AddHabit';



class App extends Component {
  constructor() {
    super();
    this.state = {
      habitTracker: [],
    }
  }

  componentDidMount() {

  };

  render() {
    return (
      <div>
        <Header />
        <AddHabit />
        {/* <DeleteHabit /> */}
        <button>Start new week</button>
      </div>
    )
  }
}

export default App;

