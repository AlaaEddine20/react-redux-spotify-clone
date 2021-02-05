import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron,Button,Row,Col,Container,Image} from "react-bootstrap";
import {FaPlayCircle } from 'react-icons/fa';
import {AiOutlineHeart } from 'react-icons/ai';



class artistPage extends React.Component {
  state = {
    artist: {},
    tracks: [],
    loading: true,
  };

  fetchArtist = async (id) => {
    try {
      const url = "https://deezerdevs-deezer.p.rapidapi.com/artist/";
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
        artist: respObj,
        
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchTracks = async (id) => {
    try {
        
      const url = "https://deezerdevs-deezer.p.rapidapi.com/artist/";
      const resp = await fetch(url + id +"/top?limit=50", {
        headers: {
          "x-rapidapi-key":
            "7058b459femsh8bbc3e5e09ff45bp16ae10jsnaa8151340a4c",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      console.log(resp);
      const respObj = await resp.json();
      console.log("tracks:",respObj.data);
      this.setState({
        tracks:respObj.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
      console.log("Im from artist")
    this.fetchArtist(this.props.match.params.id);
    this.fetchTracks(this.props.match.params.id)
  }
  render() {
    const {artist, loading, tracks } = this.state;

    return (

      <>
<Container style={{  }}>
<div className="min-vw-100 vh-10" style={{ marginLeft: "17%",left:"0px", height:"10%" }}>
  
  <img
              style={{ objectFit:"cover"}}
              src={artist.picture_medium}
              alt=""
  />
  <h2 style={{ color: "white", marginBottom: 30 }}> {artist.name}</h2>
  <FaPlayCircle style={{color:"green",fontSize:"40px"}} />
  <AiOutlineHeart style={{color:"white",fontSize:"40px"}}/>

  {/* <div className="track-list ml-5">
              <h2 style={{ color: "white", marginBottom: 30 }}>
                POPULAR
              </h2>
              <ul>
                {tracks.map((track) => (
                  <li className="d-flex justify-content-between">
                    {track.title} <span>{track.duration}</span>
                  </li>
                ))}
              </ul>
            </div> */}

<Row>
<Col md={9}  >

<div className="tracklist pr-3 p-1 " style={{borderBottom:"1px solid gray" }}>
<h5 style={{ color: "white", marginBottom: 30 }}>
               Popular 
              </h5>

{tracks.map((track) => (


<div className="d-flex">
<Image
          className="artist-song-cover"
          src={track.album.cover_small}
          alt=""
        />



<p clasName="ml-2">{track.title_short}</p>
<p className="subtitle ml-2">{track.rank}</p>
<div className=" ml-auto">
<p class="align-self-start fas fa-music d-inline "><AiOutlineHeart style={{color:"gray",fontSize:"16px"}} /></p>
<p className="d-inline subtitle ml-3">{track.duration}</p>
</div>
</div>
))}

</div>
</Col>
<Col md={3}>

</Col>
</Row>

  
  
</div>
        {/* {!loading && (
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
        )} */}
        {/* {loading && <h1>Loading...</h1>} */}
        </Container>
      </>
    );
  }
}

export default artistPage;
