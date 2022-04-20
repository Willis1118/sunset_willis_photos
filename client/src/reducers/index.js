import { combineReducers } from "redux";

import posts from './posts'

export default combineReducers({
    posts: posts, //taking this as a handler for actions on posts array
}); //in here we are going to combine all reducers together and sent to store