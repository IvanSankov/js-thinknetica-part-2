import React from 'react';

import Header from "./components/Header";
import Book from "./components/Book";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Book book={this.props.book}/>
        <Footer />
      </>
    )
  }
}

