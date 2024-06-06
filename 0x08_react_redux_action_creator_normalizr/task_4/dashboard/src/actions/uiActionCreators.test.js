import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('ui action creators', () => {
    it('login', () => {
        const result = login('user@test.com', 'password');

        expect(result.type).toBe(LOGIN);
        expect(result.user.email).toBe('user@test.com')
        expect(result.user.password).toBe('password')
    });

    it('logout', () => {
        const result = logout();

        expect(result.type).toBe(LOGOUT);
    });

    test('displayNotificationDrawer', () => {
        const result = displayNotificationDrawer();

        expect(result.type).toBe(DISPLAY_NOTIFICATION_DRAWER);
    });

    test('hideNotificationDrawer', () => {
        const result = hideNotificationDrawer();

        expect(result.type).toBe(HIDE_NOTIFICATION_DRAWER);
    })
});