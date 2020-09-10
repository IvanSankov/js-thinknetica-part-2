import React from "react";

import Book from "../books/Book";
import Scroll2Up from "../helpers/Scroll2Up";

export default function Content(props) {
  const {bookId} = props

  return (
    <>
      <Book key={bookId} bookId={bookId}/>
      <Scroll2Up/>
    </>
  );
}