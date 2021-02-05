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
    case "TOGGLE_LOADING":
      return {
        ...state,
        artists: {
          ...state.artists,
          loading: action.payload,
        },
      };
    default:
      return state;
  }
}
