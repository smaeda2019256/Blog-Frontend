import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducerSignUp, userReducerLogout, userReducerSignIn, userReducerProfile } from './reducers/userReducer';

//combinar los reductores
const reducer = combineReducers({
    signIn: userReducerSignIn,
    signUp: userReducerSignUp,
    logOut: userReducerLogout,
    userProfile: userReducerProfile
});


//estado inicial
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;