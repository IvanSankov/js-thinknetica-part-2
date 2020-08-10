import React from "react";

import ThinkneticaClient from "../../http/airtable/thinknetica-client";
import Book from "./Book";
import Loader from "../helpers/Loader";

export default class BookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    }

    this._client = new ThinkneticaClient();
  }

  componentDidMount() {
    this._loadBook();
  }

  _loadBook() {
    this._client
      .getBookById(this.props.bookId)
      .then(book => {
        this.setState({
          book
        });
      });
  }

  render() {
    const { book } = this.state

    return (
      <>
        {book ? <Book book={book} /> : <Loader />}
      </>
    );
  }
}