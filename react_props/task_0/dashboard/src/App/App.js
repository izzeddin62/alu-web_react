import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";

function App() {
  const isLoggedIn = true;
  return (
    <div className="app">
      <Notifications />
      <Header />
       {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
  );
}

export default App;
