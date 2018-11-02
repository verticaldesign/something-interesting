import { combineReducers } from "redux";
import gifReducers from "./gifs";
import repoReducers from "./repos";

export default combineReducers({
  gifs: gifReducers,
  repos: repoReducers
});
