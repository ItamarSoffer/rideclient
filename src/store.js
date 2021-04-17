import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './Reducers/usersReducer';
import sitesReducer from './Reducers/sitesReducer';
import modalsReducer from './Reducers/modalsReducer';


const store = createStore(
    combineReducers({
        usersReducer,
        sitesReducer,
        modalsReducer


    }),
    {},
    applyMiddleware(thunk)
);

export default store;