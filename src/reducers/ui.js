import initialState from "../store";
export default function (state = initialState, action) {
  switch (action.type) {
    case "POPULATE_ARTISTS":
      return {
        ...state,
        artists: {
          ...state.artists,
          artistList: action.payload,
        },
      };
    case "POPULATE_SONGS":
      return {
        ...state,
        songs: {
          ...state.songs,
          songList: action.payload,
        },
      };
    case "ASSIGN_CURRENT_ALBUM":
      return {
        ...state,
        songs: {
          ...state.songs,
          selectedAlbum: action.payload,
        },
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
