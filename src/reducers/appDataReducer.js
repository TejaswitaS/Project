import { createReducer } from './utils';
import actions from '../actions/actionName';

const initialState = {
	app: {
		isLoaded: false
	},
	showSideBar: false
}

export default createReducer(initialState, {
	[actions.APPLOADED]: (state, payload) => {
		return Object.assign({}, state, {
			app: {
				isLoaded: payload
			}
		});
	},

	[actions.TOGGLE_SIDE_BAR]: (state, payload) => {
		return Object.assign({}, state, {
			showSidebar: payload
		});
	}
})