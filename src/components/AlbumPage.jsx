import React from "react";

class AlbumPage extends React.Component {
  state = {
    album: {},
    tracks: [],
    loading: true,
  };

  fetchAlbum = async (id) => {
    try {
      const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";
      const resp = await fetch(url + id, {
        headers: {
          "x-rapidapi-key":
            "7058b459femsh8bbc3e5e09ff45bp16ae10jsnaa8151340a4c",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      console.log(resp);
      const respObj = await resp.json();
      console.log(respObj);
      this.setState({
        album: respObj,
        tracks: respObj.tracks.data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    this.fetchAlbum(this.props.match.params.id);
  }
  render() {
    const { album, loading, tracks } = this.state;

    return (
      <>
        {!loading && (
          <div className="album-page">
            <img
              style={{ marginLeft: 100, width: 400, height: 400 }}
              src={album.cover_big}
              alt=""
            />

            <div className="track-list ml-5">
              <h2 style={{ color: "white", marginBottom: 30 }}>
                {album.title}
              </h2>
              <ul>
                {tracks.map((track) => (
                  <li className="d-flex justify-content-between">
                    {track.title} <span>{track.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {loading && <h1>Loading...</h1>}
      </>
    );
  }
}

export default AlbumPage;
