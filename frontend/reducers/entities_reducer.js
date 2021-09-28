import {combineReducers} from 'redux';
import artsReducer from './arts_reducer';
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    arts: artsReducer
});

export default entitiesReducer;