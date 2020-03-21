import React from "react";
import "./App.css";
import User from '../src/User';

class App extends React.Component {
  render() {
    return <User 
    name="Dunieski Otano" 
    avatar="https://dunieski-assets-2020.s3.amazonaws.com/dunieski-otano+copy.png" 
    email="dunieskior@gmail.com" />;
  }
}

export default App;
