import React from "react";
import BookListItem from "./BookListItem";

export default function BookList({ books }) {
  return (
    <>
      <h2>Book list</h2>
      <ul>
        {books.map(book => <BookListItem key={book.id} bookId={book.id} title={book.title} />)}
      </ul>
    </>
  );
}