import React from "react";

import SubscriptionConditionModal from "../modals/SubscriptionConditionModal";
import WishlistBtn from "./WishlistBtn";

export default function BookInfo(props) {
  const { book } = props;

  return (
    <div className="row">
      <div className="col-4 col-lg-3">
        <div className="row">
          <div className="col-lg-12">
            <img src={book.cover} className="img-fluid" alt={book.title}/>
          </div>
          <div className="col-lg-12">
            <SubscriptionConditionModal/>
          </div>
          <div className="col-lg-12">
            <WishlistBtn bookId={book.id} title={book.title} />
          </div>
        </div>
      </div>
      <div className="col-8 col-lg-9">
        <div className="row">
          <div className="col-lg-12"><b>Title</b>: {book.title}</div>
          <div className="col-lg-12"><b>Short description</b>: {book.shortDescription}</div>
          <div className="col-lg-12"><b>Pages</b>: {book.pages}</div>
          <div className="col-lg-12"><b>Language</b>: {book.language}</div>
          <div className="col-lg-12"><b>Progress</b>: {book.progress}%</div>
          <div className="col-lg-12"><b>Min price</b>: ${book.minPrice}</div>
          <div className="col-lg-12"><b>Desired price</b>: ${book.desiredPrice}</div>
          <div className="col-lg-12"><b>Current sum</b>: ${book.currentSum}</div>
          <div className="col-lg-12"><b>Expected sum</b>: ${book.expectedSum}</div>
        </div>
      </div>
    </div>
  );
}