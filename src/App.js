import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import AlbumPage from "./components/AlbumPage";
import SignUp from "./components/SignUp";

class App extends React.Component {
  render() {
    return (
      <div className="main-components d-flex">
        <Sidebar />
        <Router>
          <Route exact path="/home" component={Home} />
          <Route extact path="/album/:id" component={AlbumPage} />
        </Router>
        <Route exact path="/signup" component={SignUp} />
        <Player />
      </div>
    );
  }
}

export default App;
