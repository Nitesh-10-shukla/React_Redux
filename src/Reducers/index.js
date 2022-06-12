import { combineReducers } from "redux";
import userreducer from './Userreducer';


export default combineReducers({
    users:userreducer
})