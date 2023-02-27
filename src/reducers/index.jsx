import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import available from "./available";
import appointment from "./appointment";

export default combineReducers({ alert, auth, profile, available, appointment});
