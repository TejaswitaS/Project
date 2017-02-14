import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import AppData from './appDataReducer';


export default combineReducers({
	routing: routerReducer,
	AppData
});