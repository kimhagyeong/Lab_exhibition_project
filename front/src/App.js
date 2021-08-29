import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AD from "./component/adPage/index";
import MainPage from "./component/mainPage/index"

function App() {
  return (
    <>
      <Router>
      <Route path="/AD" exact component={AD} />
      <Route path="/" exact component={MainPage} />
      </Router>
    </>
  );
}

export default App;
