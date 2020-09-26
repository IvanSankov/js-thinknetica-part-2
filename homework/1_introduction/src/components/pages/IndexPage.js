import React, { useState, useLayoutEffect } from "react";
import ThinkneticaClient from "../../http/airtable/thinknetica-client";
import BookList from "../books/BookList";
import Loader from "../helpers/Loader";

export default function IndexPage(props) {
  const [books, setBooks] = useState();

  useLayoutEffect(() => {
    const _client = new ThinkneticaClient();

    _client
      .getListBooks()
      .then(books => {
        setBooks(books);
      });
  }, []);

  return books ? <BookList books={books}/> : <Loader />;
}