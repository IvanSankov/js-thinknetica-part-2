import React from "react";
import { Link } from "react-router-dom";
import { bookPage } from "../../helpers/url-hepler";

export default function BookListItem({ bookId, title }) {
  return (
    <li>
      <Link to={bookPage(bookId)}>
        {title}
      </Link>
    </li>
  );
}