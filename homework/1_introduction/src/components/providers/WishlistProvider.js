import React, { useState, useEffect } from 'react';
import {cloneDeep} from "lodash";

import { WishlistContext } from '../contexts/Wishlist';

export default function WishlistProvider(props) {
 const [ wishlist, setWishlist ] = useState([]);

 useEffect(() => {
   if (localStorage.getItem('wishlist')) {
      setWishlist(JSON.parse(localStorage.wishlist));
   }

   const changeStorage = (event) => {
     console.log(event);

     if (event.key !== 'wishlist') {
       return;
     }

     setWishlist(JSON.parse(event.newValue));
   }

   window.addEventListener('storage', changeStorage);

   return () => window.removeEventListener('storage', changeStorage);
 }, []);

 const addBook = (bookId, title) => {
   const newBook = {
     id: bookId,
     title
   };

   setWishlist(prevWishlist => {
      const newWishlist = cloneDeep(prevWishlist);
      newWishlist.push(newBook);

     localStorage.setItem('wishlist', JSON.stringify(newWishlist));

     return newWishlist;
   });
 }

 const removeBook = (bookId) => {
   setWishlist(prevWishlist => {
     const newWishlist = prevWishlist.filter(book => book.id !== bookId);

     localStorage.setItem('wishlist', JSON.stringify(newWishlist));

     return newWishlist;
   });
 }

 const value = {
   wishlist,
   removeBook,
   addBook
 }

 return (
   <WishlistContext.Provider value={value}>
     { props.children }
   </WishlistContext.Provider>
 );
}