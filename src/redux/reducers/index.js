import { combineReducers } from 'redux';
import formReducer from './form/formReducer';

export default combineReducers({
	formObj: formReducer,
});
