import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotifications } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';
import AppContext, { user } from "./AppContext";
import { connect } from 'react-redux';

export class App extends React.Component {
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotifications() },
  ];


  constructor(props) {
    
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
      listNotifications: [...this.listNotifications]
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  logOut() {
    this.setState({ user });
  }

  markNotificationAsRead(id) {
    console.log(id, "Notification has been marked as read")
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notification) => notification.id !== id),
    }));
  }



  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "h") {
        alert("Logging you out");
        this.props.logOut();
      }
    });
  }
  render() {
    const { displayDrawer, user, listNotifications } = this.state;
    return (
      <AppContext.Provider value={this.state}>
        <div className={css(styles.app)}>
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          <BodySectionWithMarginBottom title={this.isLoggedIn ? 'Course list' : "Log in to continue"}>
            {user.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login logIn={this.logIn} />}
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>Latest school gossip</p>
          </BodySection>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}



const styles = StyleSheet.create({
  app: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
  },
  body: {
    textAlign: 'center',
    fontSize: '18px',

  },
  footer: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '12px',
    width: '100%',
    backgroundColor: 'white',
    borderTop: '1px solid black',
  }
});

export function mapStateToProps(state) {
  return {
    isLoggedIn: state.get ? state.get('isUserLoggedIn') : state.isUserLoggedIn,
  };
}

export default connect(mapStateToProps)(App);