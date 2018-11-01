import { combineReducers } from "redux";
import gifReducers from "./gifs";

export default combineReducers({
  gifs: gifReducers
});
