import React from "react";

import BookContainer from "../books/BookContainer";
import Scroll2Up from "../helpers/Scroll2Up";

export default function Content(props) {
  const {bookId} = props

  return (
    <>
      <BookContainer key={bookId} bookId={bookId}/>
      <Scroll2Up/>
    </>
  );
}