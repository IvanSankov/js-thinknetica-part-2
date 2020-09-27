import React, {useLayoutEffect, useState} from "react";
import useWindowSize from "../../hooks/windowSize";
import ThinkneticaClient from "../../http/airtable/thinknetica-client";
import Book from "../books/Book";
import Loader from "../helpers/Loader";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

export default function BookPage(props) {
  const {id} = useParams();
  const [book, setBook] = useState(null);
  const dimensions = useWindowSize();

  useLayoutEffect(() => {
    const _client = new ThinkneticaClient();

    _client
      .getBookById(id)
      .then(book => {
        setBook(book);
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{ book ? book.title : 'Loading...' }</title>
      </Helmet>

      {book ? <Book book={book} dimensions={dimensions}/> : <Loader/>}
    </>
  );
}