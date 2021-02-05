import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import uiReducers from "../reducers/ui";
import playerReducers from "../reducers/player";
import userReducers from "../reducers/user";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: {
    liked: [],
    username: "",
    password: "",
    email: "",
    playlist: [],
  },
  player: {
    queue: [],
    currentlyPlaying: false,
  },
  ui: {
    artists: {
      loading: false,
      artistList: [],
    },
    albums: [],
    songs: [],
  },
};

const combinedReducer = combineReducers({
  user: userReducers,
  player: playerReducers,
  ui: uiReducers,
});

export default function configureStore() {
  return createStore(
    combinedReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
