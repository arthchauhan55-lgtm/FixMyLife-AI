import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import chatReducer from './reducers/chatReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
