import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './Header';
import AddHabit from './AddHabit';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <AddHabit />
      </div>
    )
  }
}

export default App;

