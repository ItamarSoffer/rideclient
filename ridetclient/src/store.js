import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './Reducers/usersReducer';
import sitesReducer from './Reducers/sitesReducer';


const store = createStore(
    combineReducers({
        usersReducer,
        sitesReducer,

    }),
    {},
    applyMiddleware(thunk)
);

export default store;