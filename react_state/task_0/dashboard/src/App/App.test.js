import { StyleSheetTestUtils } from "aphrodite";
import App from "./App";
import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react';

StyleSheetTestUtils.suppressStyleInjection()
describe('App tests', () => {
    it('should render the right divs', () => {
        render(<App />)
        screen.getByTestId('App-header')
        screen.getByTestId('App-body')
        screen.getByTestId('App-footer')
    });


    it.skip("Has default state for displayDrawer false", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toEqual(false);
    });

    it.skip("displayDrawer changes to true when calling handleDisplayDrawer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toEqual(false);

        const instance = wrapper.instance();

        instance.handleDisplayDrawer();

        expect(wrapper.state().displayDrawer).toEqual(true);
    });

    it.skip("displayDrawer changes to false when calling handleHideDrawer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toEqual(false);

        // const instance = wrapper.instance();

        wrapper.instance().handleDisplayDrawer();

        expect(wrapper.state().displayDrawer).toEqual(true);

        wrapper.instance().handleHideDrawer();

        expect(wrapper.state().displayDrawer).toEqual(false);
    });
})