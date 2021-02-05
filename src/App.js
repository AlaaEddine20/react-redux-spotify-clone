import React from "react";
import { Route, withRouter } from "react-router-dom";
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
        {this.props.location.pathname !== "/signup" && <Sidebar />}

        <Route exact path="/" component={Home} />
        <Route extact path="/album/:id" component={AlbumPage} />
        {this.props.location.pathname !== "/signup" && <Player />}

        <Route exact path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default withRouter(App);
