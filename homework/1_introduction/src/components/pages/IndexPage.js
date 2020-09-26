import React, { useState, useLayoutEffect } from "react";
import ThinkneticaClient from "../../http/airtable/thinknetica-client";
import BookList from "../books/BookList";
import Loader from "../helpers/Loader";
import {Helmet} from "react-helmet";

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

  return (
    <>
      <Helmet>
        <title>Welcome to SMarketplace</title>
      </Helmet>
      {books ? <BookList books={books}/> : <Loader />}
    </>
  );
}