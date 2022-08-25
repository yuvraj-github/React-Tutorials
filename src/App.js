import './App.css';
import React, { useState } from 'react';
import PropsToStudentClass from './Class Component/PropsToStudentClass';
//import PropsToStudent from './Functional Component/PropsToStudent';
// import UserFunctionalComponent from './Functional Component/UserFunctionalComponent';
// import UserClassComponent from './Class Component/UserClassComponent';
// import StateWithFunction from './Functional Component/StateWithFunction';
// import StateWithClass from './Class Component/StateWithClass';

function App() {
  const [name, setName] = useState('Ajay');
  return (
    <div className="App">
      {/* <UserFunctionalComponent />
      <UserClassComponent /> */}
      {/* <User /> */}
      {/* <UserClass />
      <StateWithFunction />
      <StateWithClass /> */}
      {/* <PropsToStudent name={name} email={'ajay@gmail.com'} other={{ address: 'delhi', mobile: '8444' }} />
      <button onClick={() => setName('Anil')}>Update Name</button> */}
      <PropsToStudentClass name={name} email={'anil@gmail.com'}/>
      <button onClick={() => setName('Anil')}>Update Name</button>
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

/*
class UserClass extends React.Component {
  render() {
    return (
      <h1>User Class Component</h1>
    )
  }
} */

export default App;
