import React from "react";

import Book from "../books/Book";

export default function Content(props) {
  return (
    <Book book={props.book}/>
  );
}