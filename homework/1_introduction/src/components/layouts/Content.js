import React from "react";

import Book from "../books/Book";
import Scroll2Up from "../helpers/Scroll2Up";

export default function Content(props) {
  return (
    <>
      <Book book={props.book}/>
      <Scroll2Up/>
    </>
  );
}