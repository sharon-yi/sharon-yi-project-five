import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

import { Checkbox, Switch } from 'pretty-checkbox-react';


class GetCheckboxInfo extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleCheckOnChange = (e) => {
    const habitDay = e.target.id
    //access the database 
    const dbRef = firebase.database().ref();
    //specifically the node that is identified by the id
    //we want to get the 'sunday' of the id
    dbRef.child(this.props.habitValue.habitId).child(habitDay).once('value').then((snapshot) => {
      dbRef.child(this.props.habitValue.habitId).child(habitDay).set(!snapshot.val())
    })
  }

    //change the value to be the opposite


  render() {
    return (
        <form className="checkDate">
        <input
          id="sunday"
          type="checkbox"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.sunday}
          onChange={this.handleCheckOnChange}
        />
        <input
          type="checkbox"
          id="monday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.monday}
          onChange={this.handleCheckOnChange}
        />
        <input
          type="checkbox"
          id="tuesday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.tuesday}
          onChange={this.handleCheckOnChange}
        />
        <input
          type="checkbox"
          id="wednesday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.wednesday}
          onChange={this.handleCheckOnChange}
        />
        <input
          type="checkbox"
          id="thursday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.thursday}
          onChange={this.handleCheckOnChange}
        />
        <input
          type="checkbox"
          id="friday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.friday}
          onChange={this.handleCheckOnChange}
        />
        <input
          type="checkbox"
          id="saturday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.saturday}
          onChange={this.handleCheckOnChange}
        />
      </form>
    );
  }
}

export default GetCheckboxInfo;