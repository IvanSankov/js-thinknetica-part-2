import React, {useContext} from 'react';
import {WishlistContext} from '../contexts/Wishlist';

export default function WishlistBtn({ bookId, title }) {
  const wishlist = useContext(WishlistContext);
  const hasWishlistBook = wishlist.wishlist.some(book => book.id === bookId);

  const toggle = () => {
    if (hasWishlistBook) {
      wishlist.removeBook(bookId);
    } else {
      wishlist.addBook(bookId, title)
    }
  };

  return (
    <button onClick={toggle} className={`btn ${hasWishlistBook ? 'btn-danger' : 'btn-success'}`}>
      { hasWishlistBook ? 'Remove from wishlist' : 'Add to wishlist' }
    </button>
  );
}