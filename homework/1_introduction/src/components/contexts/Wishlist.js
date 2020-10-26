import React from "react";

export const WishlistContext = React.createContext({
  wishlist: [],
  removeBook: () => {},
  addBook: () => {},
});