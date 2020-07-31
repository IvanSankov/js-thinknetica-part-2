import React from "react";

import AuthorList from "./AuthorList"
import BookInfo from "./BookInfo";
import ContactForm from "../forms/contact/ContactForm";
import EmptyBlock from "../helpers/EmptyBlock";

const MIN_SUBSCRIBERS_FOR_POPULARITY = 100;

export default class Book extends React.Component {
  render() {
    const {book} = this.props;
    if (!book) {
      return <EmptyBlock/>;
    }

    const popular = book.subscribers > MIN_SUBSCRIBERS_FOR_POPULARITY
      && <span className="badge badge-primary">Popular</span>;

    return (
      <>
        <div className="row bg-light">
          <div className="col-sm-7">
            <h3>Book {popular}</h3>
            <BookInfo book={book}/>
          </div>
          <div className="col-sm-4">
            <AuthorList authors={book.authors}/>
          </div>
          <div className="col-sm-12">
            <ContactForm/>
          </div>
        </div>
      </>
    );
  }
}