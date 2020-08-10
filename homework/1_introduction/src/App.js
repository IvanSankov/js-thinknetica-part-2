import React from 'react';

import { UserContext } from "./components/contexts/User";
import Header from "./components/layouts/Header";
import Content from "./components/layouts/Content";
import Footer from "./components/layouts/Footer";

const user = {
  email: "ivan.ivanov@gmail.com",
  firstName: "Ivan",
  lastName: "Ivanov",
  avatarUrl: "https://www.viawater.nl/files/default-user.png"
}

export default class App extends React.Component {
  render() {
    return (
      <>
        <UserContext.Provider value={user}>
          <Header />
          <Content bookId="reco6TVYCKDcDrSSM" />
          <Footer />
        </UserContext.Provider>
      </>
    )
  }
}

