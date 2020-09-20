import React, {useState, useLayoutEffect, useEffect} from "react";

import AuthorList from "./AuthorList"
import BookInfo from "./BookInfo";
import ContactForm from "../forms/contact/ContactForm";
import SimilarBookList from "./SimilarBookList";
import Loader from "../helpers/Loader";
import ThinkneticaClient from "../../http/airtable/thinknetica-client";

const MIN_SUBSCRIBERS_FOR_POPULARITY = 100;

function Book(props) {
  const [book, setBook] = useState(null);
  const dimensions = useWindowSize();

  useLayoutEffect(() => {
    const _client = new ThinkneticaClient();

    _client
      .getBookById(props.bookId)
      .then(book => {
        setBook(book);
      });
  }, []);

  if (!book) {
    return <Loader/>;
  }

  const popular = book.subscribers > MIN_SUBSCRIBERS_FOR_POPULARITY
    && <span className="badge badge-primary">Popular</span>;

  return (
    <>
      <div className="row bg-light">
        <div className="col-12 col-lg-7">
          <div className="row">
            <div className="col-8 col-lg-12">
              <h3>Book {popular}</h3>
              <BookInfo book={book}/>
            </div>
            <div className="mt-3 col-4 col-lg-12 border">
              <SimilarBookList dimensions={dimensions} book={book} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h3>Authors</h3>
          <AuthorList dimensions={dimensions} authors={book.authors}/>
        </div>
        <div className="col-lg-12">
          <ContactForm/>
        </div>
      </div>
    </>
  );
}


const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    width: window.outerWidth,
    height: window.outerHeight
  });

  useEffect(() => {
    const handlerResize = () => {
      setDimensions({
        width: window.outerWidth,
        height: window.outerHeight,
      });
    }

    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    }
  }, []);


  return dimensions;
}

export default Book;