import React, { Component } from 'react';
import './App.css';
import Output from './UserOutput/UserOutput';
import Input from './UserInput/UserInput'

class App extends Component {

  state = {
    users: [
      { username: 'Tom' },
      { username: 'Sophie' },
      { username: 'Emma' },
      { username: 'James' },
      { username: 'Dickon' },
      { username: 'Daisy' },
    ],
    otherState: 'some other value'
  };

  nameChangedHandler = (event) => {
    this.setState({
      users: [
        { username: 'Tom' },
        { username: 'Sophie' },
        { username: event.target.value },
        { username: 'James' },
        { username: 'Dickon' },
        { username: 'Daisy' },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <Output usernameOne={this.state.users[0].username} usernameTwo={this.state.users[1].username}/>
        <Output usernameOne={this.state.users[2].username} usernameTwo={this.state.users[3].username}/>
        <Output usernameOne={this.state.users[4].username} usernameTwo={this.state.users[5].username}/>
        <Input changed={this.nameChangedHandler} currentName={this.state.users[2].username}></Input>
      </div>
    );
  }
}

export default App;
