import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import AlbumPage from "./components/AlbumPage";
import SignUp from "./components/SignUp";
import LikedAlbums from "./components/LikedAlbums";

class App extends React.Component {
  render() {
    return (
      <div className="main-components d-flex">
        <Sidebar />

        <Route exact path="/" component={Home} />
        <Route exact path="/album/:id" component={AlbumPage} />
        <Route exact path="/liked" component={LikedAlbums} />

        <Route exact path="/signup" component={SignUp} />
        <Player />
      </div>
    );
  }
}

export default App;
