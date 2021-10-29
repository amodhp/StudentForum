import { combineReducers } from "redux";
import ImageListReducer from "./ImageListReducer";

export default combineReducers({
    imageListing:ImageListReducer
})