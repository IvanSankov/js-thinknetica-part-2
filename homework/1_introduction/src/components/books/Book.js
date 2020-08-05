import React from "react";

import AuthorList from "./AuthorList"
import BookInfo from "./BookInfo";
import ContactForm from "../forms/contact/ContactForm";
import EmptyBlock from "../helpers/EmptyBlock";
import SimilarBookList from "./SimilarBookList";
import OrderBookForm from "../forms/order-book/OrderBookForm";
import SliderOrderBookForm from "../forms/order-book/SliderOrderBookForm";

const MIN_SUBSCRIBERS_FOR_POPULARITY = 100;

export default function Book(props) {
  const { book } = props;
  if (!book) {
    return <EmptyBlock/>;
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
            <div className="mt-3 col-sm-12">
              <OrderBookForm minPrice={book.minPrice} initialPrice={book.minPrice} />
            </div>
            <div className="mt-3 col-sm-12">
              <SliderOrderBookForm minPrice={book.minPrice} initialPrice={book.minPrice} />
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