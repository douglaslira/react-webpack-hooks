import { FORM_CONTENT } from "../../constants/index";
import moment from 'moment';

const initialState = {
	formItems: {
		title: '',
		description: ''
	},
	lastUpdated: moment().format()
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FORM_CONTENT:
			let newState = { ...state.formItems, [action.payload.target.id]: action.payload.target.value};
			return {
				...state,
				formItems: newState,
				lastUpdated: moment().format()
			};
		default:
      return state;
	}
};
