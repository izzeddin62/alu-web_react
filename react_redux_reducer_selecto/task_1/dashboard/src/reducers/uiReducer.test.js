import { uiReducer } from './uiReducer';
import { Map } from 'immutable';

describe('uiReducer', () => {
    const initialState = Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
    
    })
    it('should return the initial state', () => {
        expect(uiReducer(initialState, {})).toEqual(initialState);
    });

    it('should handle LOGOUT', () => {

        expect(
            uiReducer(initialState, {
                type: 'LOGOUT'
            })
        ).toEqual(initialState.set('isUserLoggedIn', false));
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        expect(
            uiReducer(initialState, {
                type: 'DISPLAY_NOTIFICATION_DRAWER'
            })
        ).toEqual(initialState.set('isNotificationDrawerVisible', true));
    });

    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        expect(
            uiReducer(initialState, {
                type: 'HIDE_NOTIFICATION_DRAWER'
            })
        ).toEqual(initialState.set('isNotificationDrawerVisible', false));
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            uiReducer(initialState, {
                type: 'LOGIN_SUCCESS'
            })
        ).toEqual(initialState.set('isUserLoggedIn', true));
    });

    it('should handle LOGIN_FAILURE', () => {
        expect(
            uiReducer(initialState, {
                type: 'LOGIN_FAILURE'
            })
        ).toEqual(initialState.set('isUserLoggedIn', false));
    });
});