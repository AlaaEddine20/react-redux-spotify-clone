import initialState from "../store";
export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_ARTIST":
      return {
        ...state,
       artist: action.payload
    };
    case "SET_TOP_ALBUMS":
      return {
        ...state,
       tracks: action.payload
    };;
    default:
      return state;
  }
}
