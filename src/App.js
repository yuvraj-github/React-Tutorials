import logo from './logo.svg';
import './App.css';
import UserFunctionalComponent from './Functional Component/UserFunctionalComponent';
import UserClassComponent from './Class Component/UserClassComponent';
import React from 'react';
import StateWithFunction from './Functional Component/StateWithFunction';
import StateWithClass from './Class Component/StateWithClass';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <UserFunctionalComponent />
      <UserClassComponent />
      {/* <User /> */}
      <UserClass />
      <StateWithFunction />
      <StateWithClass />
    </div>
  );
}

/*
function User() {
  return (
    <div className="App">
      <h1>User Component</h1>      
    </div>
  );
} */

class UserClass extends React.Component {
  render() {
    return (
      <h1>User Class Component</h1>
    )
  }
}

export default App;
