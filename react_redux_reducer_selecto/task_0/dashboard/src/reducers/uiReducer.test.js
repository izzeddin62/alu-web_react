import { uiReducer } from './uiReducer';

describe('uiReducer', () => {
    it('should return the initial state', () => {
        expect(uiReducer(undefined, {})).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        });
    });

    it('should handle LOGOUT', () => {
        expect(
            uiReducer({}, {
                type: 'LOGOUT'
            })
        ).toEqual({
            isUserLoggedIn: false
        });
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        expect(
            uiReducer({}, {
                type: 'DISPLAY_NOTIFICATION_DRAWER'
            })
        ).toEqual({
            isNotificationDrawerVisible: true
        });
    });

    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        expect(
            uiReducer({}, {
                type: 'HIDE_NOTIFICATION_DRAWER'
            })
        ).toEqual({
            isNotificationDrawerVisible: false
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            uiReducer({}, {
                type: 'LOGIN_SUCCESS'
            })
        ).toEqual({
            isUserLoggedIn: true
        });
    });

    it('should handle LOGIN_FAILURE', () => {
        expect(
            uiReducer({}, {
                type: 'LOGIN_FAILURE'
            })
        ).toEqual({
            isUserLoggedIn: false
        });
    });
});