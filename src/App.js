import React from 'react';
// import './App.css';
// import Container from './container/Container';
import SignInSide from './components/LoginComponent';
import Test from './components/TestComponent';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <div className="App cfb">
      {/* <Container/> */}
      <SignInSide />
      {/* <Test /> */}


    </div>
  );
}

export default App;
