import React, { Component } from 'react';
import backgroundImage from './assets/backgroundImage.svg'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Habit Tracker</h1>
        <h2>Hello! Let's keep track of your daily habits below.</h2>
        <img src={backgroundImage} alt="" className="backgroundImage"/>
      </div>
    )
  }
}
export default Header;