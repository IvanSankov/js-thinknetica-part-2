import React, { useContext } from 'react';

import { WishlistContext } from "../../contexts/Wishlist";

export default function Wishlist(props) {
  const wishlist = useContext(WishlistContext);

  return <p>In wishlist <span className="badge badge-warning">{ wishlist.wishlist.length }</span></p>
}