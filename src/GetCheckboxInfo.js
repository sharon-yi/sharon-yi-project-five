import React, { Component } from 'react';
import firebase from './firebase';
import { Checkbox } from 'pretty-checkbox-react';

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



  // CLEARING ALL
  render() {
    return (
      <form className="checkDate">
        <Checkbox plain shape="round" color="warning-o" icon={<i className="fas fa-check-circle"></i>} animation="tada"
          id="sunday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.sunday}
          onChange={this.handleCheckOnChange}></Checkbox>
        <Checkbox plain shape="round" color="warning-o" icon={<i className="fas fa-check-circle"></i>} animation="tada"
          id="monday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.monday}
          onChange={this.handleCheckOnChange}></Checkbox>
        <Checkbox plain shape="round" color="warning-o" icon={<i className="fas fa-check-circle"></i>} animation="tada"
          id="tuesday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.tuesday}
          onChange={this.handleCheckOnChange}></Checkbox>
        <Checkbox plain shape="round" color="warning-o" icon={<i className="fas fa-check-circle"></i>} animation="tada"
          id="wednesday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.wednesday}
          onChange={this.handleCheckOnChange}></Checkbox>
        <Checkbox plain shape="round" color="warning-o" icon={<i className="fas fa-check-circle"></i>} animation="tada"
          id="thursday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.thursday}
          onChange={this.handleCheckOnChange}></Checkbox>
        <Checkbox plain shape="round" color="warning-o" icon={<i className="fas fa-check-circle"></i>} animation="tada"
          id="friday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.friday}
          onChange={this.handleCheckOnChange}></Checkbox>
        <Checkbox plain shape="round" color="warning-o" icon={<i className="fas fa-check-circle"></i>} animation="tada"
          id="saturday"
          className="individualCheckbox"
          checked={this.props.habitValue.habitName.saturday}
          onChange={this.handleCheckOnChange}></Checkbox>
      </form>
    );
  }
}

export default GetCheckboxInfo;