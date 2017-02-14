import actions from './actionName';
import { push } from 'react-router';

export function toggleLeftSideBar(data) {
    return {
        type: actions.TOGGLE_SIDE_BAR,
        payload: data
    }
}