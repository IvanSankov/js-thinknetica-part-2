import React, {useContext} from 'react';
import {WishlistContext} from "../contexts/Wishlist";
import {Helmet} from "react-helmet";
import BookListItem from "../books/BookListItem";

export default function WishlistPage(props) {
  const wishlist = useContext(WishlistContext);

  return (
    <>
      <Helmet>
        <title>Your wishlist</title>
      </Helmet>

      <h2>Your wishlist</h2>
      <ul>
        {wishlist.wishlist.map(book => <BookListItem key={book.id} bookId={book.id} title={book.title} />)}
      </ul>
    </>
  );
}