import {combineReducers} from 'redux';
import artsReducer from './arts_reducer';
import commentsReducer from './comments_reducer';
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    arts: artsReducer,
    comments: commentsReducer
});

export default entitiesReducer;