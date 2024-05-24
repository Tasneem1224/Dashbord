import { Component } from "react";
import "./App.css";
import Body from "./component/body";

//import Signin from "./component/signin";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import UserChallenges from "./component/pages/userChallenges";
//import Footer from "./component/footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}
