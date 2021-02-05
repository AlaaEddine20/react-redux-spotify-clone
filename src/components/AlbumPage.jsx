import React from "react";
import { connect } from "react-redux";
import { Button, Col, Row, Container } from "react-bootstrap";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  toggleLoad: (load) =>
    dispatch({
      type: "TOGGLE_LOADING",
      payload: load,
    }),
  assignAlbum: (id) =>
    dispatch(async (dispatch, getState) => {
      const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";
      const resp = await fetch(url + id, {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      let album = await resp.json();
      dispatch({
        type: "ASSIGN_CURRENT_ALBUM",
        payload: album,
      });
    }),
  populateSongs: (album) =>
    dispatch({
      type: "POPULATE_SONGS",
      payload: album.tracks.data,
    }),
  addFavorite: (album) =>
    dispatch({ type: "ADD_TO_FAVOURITE", payload: album }),
  removeFavorite: (id) =>
    dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: id }),
});

class AlbumPage extends React.Component {
  async componentDidMount() {
    this.props.toggleLoad(true);
    await this.props.assignAlbum(164869492);
    await this.props.populateSongs(this.props.ui.songs.selectedAlbum);
    this.props.toggleLoad(false);
  }
  render() {
    const { selectedAlbum, songList } = this.props.ui.songs;

    return (
      <>
        {!this.props.ui.loading && (
          <div className="album-page">
            <Container>
              <img
                style={{ marginLeft: 100, width: 400, height: 400 }}
                src={selectedAlbum.cover_big}
                alt=""
              />

              <Row>
                <Col>
                  {this.props.user.liked.find(
                    (album) => album.id === selectedAlbum.id
                  ) ? (
                    <Button
                      className="btn btn-lg mt-3 mb-1"
                      variant="danger"
                      size="small"
                      onClick={() =>
                        this.props.removeFavorite(selectedAlbum.id)
                      }
                    >
                      Remove from favorite
                    </Button>
                  ) : (
                    <Button
                      className="btn btn-lg mt-3 mb-1"
                      variant="success"
                      size="small"
                      onClick={() => this.props.addFavorite(selectedAlbum)}
                    >
                      Add to favorite
                    </Button>
                  )}
                </Col>
              </Row>
            </Container>

            <div className="track-list ml-5">
              <h2 style={{ color: "white", marginBottom: 30 }}>
                {selectedAlbum.title}
              </h2>
              <ul>
                {songList.map((track) => (
                  <li className="d-flex justify-content-between">
                    {track.title} <span>{track.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {this.props.ui.loading && <h1>Loading...</h1>}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
