import React, { useEffect, useState } from "react";
import SimilarBook from "./SimilarBook";
import EmptyBlock from "../helpers/EmptyBlock";

export default class SimilarBookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarBooks: props.book.similarBooks
    };

    this.handlerRemoveBook = this.handlerRemoveBook.bind(this);
  }

  handlerRemoveBook(event) {
    const bookId = event.target.dataset.bookId;

    this.setState(state => ({
      similarBooks: state.similarBooks.filter(book => book.id !== bookId)
    }));
  }

  render() {
    const { similarBooks } = this.state;
    const { dimensions } = this.props;

    return (
      <div className="row">
        <div className="col-lg-12">
          <h3>Similar books</h3>
          {similarBooks.length === 0
            ? <EmptyBlock />
            : <DisplayBooks dimensions={dimensions} handlerRemoveBook={this.handlerRemoveBook} similarBooks={similarBooks} /> }
        </div>
      </div>
    );
  }
}

function DisplayBooks({ similarBooks, handlerRemoveBook, dimensions }) {
  const slice = dimensions.width >= 960 ? 3 : 1;

  return (
    <div className="row">
      {similarBooks.slice(0, slice).map(similarBook => (
          <SimilarBook key={similarBook.id} book={similarBook} handlerRemoveBook={handlerRemoveBook}/>
        )
      ) }
    </div>
  )
}
