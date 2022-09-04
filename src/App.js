import './App.css';
import React, { useState } from 'react';
import UseCallbackComponent from './Functional Component/UseCallbackComponent';
//import UseMemoComponent from './Functional Component/UseMemoComponent';
//import UsePureComponent from './Class Component/UsePureComponent';
//import ReuseComponent from './Functional Component/ReuseComponent';
//import UseMapFuncionComponent from './Functional Component/UseMapFuncionComponent';
//import UseEffectComponent from './Functional Component/UseEffectComponent';
//import ComponentWillUnmount from './Class Component/ComponentWillUnmount';
//import ShoudComponentUpdate from './Class Component/ShouldComponentUpdate';
//import ComponentDidUpdate from './Class Component/ComponentDidUpdate';
//import ComponentDidMount from './Class Component/ComponentDidMount';
//import PropsAsFunction from './Functional Component/PropsAsFunciton';
//import ConditionalRendering from './Functional Component/ConditionalRendering';
//import FormComponent from './Functional Component/FormComponent';
//import InputComponent from './Functional Component/InputComponent';
//import PropsToStudentClass from './Class Component/PropsToStudentClass';
//import PropsToStudent from './Functional Component/PropsToStudent';
// import UserFunctionalComponent from './Functional Component/UserFunctionalComponent';
// import UserClassComponent from './Class Component/UserClassComponent';
// import StateWithFunction from './Functional Component/StateWithFunction';
// import StateWithClass from './Class Component/StateWithClass';

function App() {
  const [name, setName] = useState('Ajay');
  /*
  function getData() {
    alert('Hello world');
  } */
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
      {/* <PropsToStudentClass name={name} email={'anil@gmail.com'}/>
      <button onClick={() => setName('Anil')}>Update Name</button> */}
      {/* <InputComponent /> */}
      {/* <FormComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <PropsAsFunction data={getData}/> */}
      {/* <ComponentDidMount /> */}
      {/* <ComponentDidUpdate /> */}
      {/* <ShoudComponentUpdate /> */}
      {/* <ComponentWillUnmount /> */}
      {/* <UseEffectComponent /> */}
      {/* <UseMapFuncionComponent /> */}
      {/* <ReuseComponent /> */}
      {/* <UsePureComponent /> */}
      {/* <UseMemoComponent /> */}
      <UseCallbackComponent />
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
