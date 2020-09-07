import React, {useState, useLayoutEffect} from "react";

import AuthorList from "./AuthorList"
import BookInfo from "./BookInfo";
import ContactForm from "../forms/contact/ContactForm";
import SimilarBookList from "./SimilarBookList";
import withBook from "../../hoc/withBook";
import withLoader from "../../hoc/withLoader";
import Loader from "../helpers/Loader";
import ThinkneticaClient from "../../http/airtable/thinknetica-client";

const MIN_SUBSCRIBERS_FOR_POPULARITY = 100;

function Book(props) {
  const [book, setBook] = useState(null);

  useLayoutEffect(() => {
    const _client = new ThinkneticaClient();

    _client
      .getBookById(props.bookId)
      .then(book => {
        setBook(book);
      });
  });

  if (!book) {
    return <Loader/>;
  }

  const popular = book.subscribers > MIN_SUBSCRIBERS_FOR_POPULARITY
    && <span className="badge badge-primary">Popular</span>;

  return (
    <>
      <div className="row bg-light">
        <div className="col-sm-7">
          <div className="row">
            <div className="col-sm-12">
              <h3>Book {popular}</h3>
              <BookInfo book={book}/>
            </div>
            <div className="mt-3 col-sm-12 border">
              <SimilarBookList book={book} />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <h3>Authors</h3>
          <AuthorList authors={book.authors}/>
        </div>
        <div className="col-sm-12">
          <ContactForm/>
        </div>
      </div>
    </>
  );
}

export default Book;