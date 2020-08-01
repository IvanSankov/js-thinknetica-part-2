import React from "react";

import Book from "../book/Book";

export default function Content(props) {
  return (
    <Book book={props.book}/>
  );
}