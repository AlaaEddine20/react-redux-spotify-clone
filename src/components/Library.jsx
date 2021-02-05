import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

class Library extends Component {
  render() {
    return (
      <Container className="main-page">
        <Row>
          <Col xs={12}>
            <h2 className="libTitle">Liked</h2>
          </Col>
        </Row>
        <Row>{/* MAP LIKED ARRAY HERE ERLENS*/}</Row>
        <Row>
          <Col xs={12}>
            <h2 className="libTitle">
              Playlists{" "}
              <PlaylistAddIcon fontSize="large" className="addPlayIcon" />
            </h2>
          </Col>
        </Row>
        <Row>{/* MAP PLAYLISTS HERE*/}</Row>
      </Container>
    );
  }
}

export default connect()(Library);
