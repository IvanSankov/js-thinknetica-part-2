import React from "react";
import {UserContext} from "../contexts/User";
import Header from "./Header";
import Footer from "./Footer";
import Scroll2Up from "../helpers/Scroll2Up";
import {BrowserRouter as Router} from "react-router-dom";

const user = {
  email: "ivan.ivanov@gmail.com",
  firstName: "Ivan",
  lastName: "Ivanov",
  avatarUrl: "https://www.viawater.nl/files/default-user.png"
}

export default function Layout(props) {
  return (
    <Router>
      <UserContext.Provider value={user}>
        <Header />
        { props.children }
        <Scroll2Up/>
        <Footer />
      </UserContext.Provider>
    </Router>
  )
}