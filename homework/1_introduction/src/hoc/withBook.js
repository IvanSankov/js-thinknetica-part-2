import React from "react";

import ThinkneticaClient from "../http/airtable/thinknetica-client";

const withBook = ExtensibleComponent => class ComponentWithBook extends React.Component {
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

    return <ExtensibleComponent book={book} />;
  }
}

export default withBook;