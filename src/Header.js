import React, { Component } from 'react';
import backgroundImage from './assets/backgroundImage.svg'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Habit Tracker</h1>
        <h2>Hello! Let's keep track of your daily habits below.</h2>
        <img src={backgroundImage} alt="" className="backgroundImage" />
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
      </div>
    )
  }
}
export default Header;