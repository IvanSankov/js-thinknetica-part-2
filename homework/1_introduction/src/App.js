import React from 'react';

import Header from "./components/layouts/Header";
import Content from "./components/layouts/Content";
import Footer from "./components/layouts/Footer";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content book={this.props.book}/>
        <Footer />
      </>
    )
  }
}

