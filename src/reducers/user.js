import initialState from "../store";
export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        liked: state.liked.concat(action.payload),
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        liked: state.liked.filter((album) => album.id !== action.payload),
      };

    default:
      return state;
  }
}
