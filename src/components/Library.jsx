import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import { connect } from "react-redux";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  generatePlaylist: (name) =>
    dispatch({
      type: "GENERATE_PLAYLIST",
      payload: { name: name, tracklist: [] },
    }),
});

class Library extends Component {
  state = {
    showModal: false,
    name: "",
  };

  submitPlaylist = async (e) => {
    e.preventDefault();
    await this.props.generatePlaylist(this.state.name);
    this.setState({ showModal: false, name: "" });
  };

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
              <PlaylistAddIcon
                fontSize="large"
                className="addPlayIcon"
                onClick={() => this.setState({ showModal: true })}
              />
            </h2>
          </Col>
        </Row>
        <Row>
          {this.props.user.playlists.length > 0 &&
            this.props.user.playlists.map((playlist) => (
              <Col xs={3}>
                <Card>
                  <Card.Header>{playlist.name}</Card.Header>
                  <ul>
                    {playlist.tracklist.map((song) => (
                      <li>{song.title}</li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
        </Row>
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>New Playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                value={this.state.name}
                placeholder="Name of playlist"
                onChange={(e) => this.setState({ name: e.currentTarget.value })}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ showModal: false })}
            >
              Discard
            </Button>
            <Button variant="primary" onClick={(e) => this.submitPlaylist(e)}>
              Create Playlist
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
