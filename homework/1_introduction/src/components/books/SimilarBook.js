import React from 'react';

const styles = {
  removeBtn: {
    position: "absolute",
  }
};

export default function SimilarBook(props) {
  const { book, handlerRemoveBook } = props

  return (
    <div className="col-sm-4">
      <div className="row">
        <div className="col-sm-12">
          <button data-book-id={book.id}
                  onClick={handlerRemoveBook}
                  className="btn btn-danger btn-small"
                  style={styles.removeBtn}>X</button>

          <img  src={book.cover} className="img-fluid" alt={book.title}/>
        </div>
        <div className="col-sm-12">
          <b>Title:</b> {book.title}
        </div>
        <div className="col-sm-12">
          <b>Author:</b> {book.authors.map(author => author.name).join(', ')}
        </div>
      </div>
    </div>
  );
}