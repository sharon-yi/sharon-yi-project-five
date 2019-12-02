import React, { Component } from 'react';
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

  render() {
    return (
      <div>
        <Header />
        <div className="datesContainer">
          <div className="dates">
            <h3 className="dateName">S</h3>
            <h3 className="dateName">M</h3>
            <h3 className="dateName">T</h3>
            <h3 className="dateName">W</h3>
            <h3 className="dateName">T</h3>
            <h3 className="dateName">F</h3>
            <h3 className="dateName">S</h3>
          </div>
        </div>
        <AddHabit />
        <button className="resetWeeks">Start new week</button>
      </div>
    )
  }
}

export default App;

