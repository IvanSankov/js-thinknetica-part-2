import React from "react";
import { Link } from "react-router-dom";
import { bookPage } from "../../helpers/url-hepler";

export default function BookListItem({ book }) {
  return (
    <li>
      <Link to={bookPage(book.id)}>
        {book.title}
      </Link>
    </li>
  );
}