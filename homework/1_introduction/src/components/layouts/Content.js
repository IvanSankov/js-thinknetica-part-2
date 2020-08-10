import React from "react";

import BookContainer from "../books/BookContainer";

export default function Content(props) {
  const { bookId } = props

  return (
    <BookContainer key={bookId} bookId={bookId}/>
  );
}