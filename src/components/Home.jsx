import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    albums: [],
    loading: true,
  };

  async componentDidMount() {
    const getAlbums = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=vinnie%20paz",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "7058b459femsh8bbc3e5e09ff45bp16ae10jsnaa8151340a4c",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    const data = await getAlbums.json();
    console.log(data);
    this.setState({ albums: data, loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="Home">
        <div className="main-page row mt-5">
          {loading ? (
            <h4>{loading}</h4>
          ) : (
            <>
              {this.state.albums.data.map((album, key) => (
                <Row className="albums-wrapper mx-2 my-3" key={key}>
                  <Col className="item-wrapper">
                    <Link
                      to={`/album/${album.album.id}`}
                      style={{ textDecoration: "none", color: "lightgrey" }}
                    >
                      <Image className="album-cover" src={album.album.cover} />
                      <h4 className="d-flex justify-content-center mt-2 album-title">
                        {album.album.title}
                      </h4>
                    </Link>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
