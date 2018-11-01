import { combineReducers } from "redux";
import searchTermReducer from "./searchTerm";

export default combineReducers({
  searchTerm: searchTermReducer
});
