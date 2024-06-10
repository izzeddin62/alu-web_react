import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export function uiReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false
            }
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true
            }
        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false
            }
        default:
            return state;
    }
}

