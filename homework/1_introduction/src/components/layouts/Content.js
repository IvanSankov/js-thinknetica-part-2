import React from "react";

import Book from "../book/Book";

export default class Content extends React.Component {
  render() {
    return (
      <Book book={this.props.book}/>
    );
  }
}