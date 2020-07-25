import ReactDOM from 'react-dom';
import React from 'react';

import Author from './Author'

export default class Book extends React.Component {
  render() {
    const {book} = this.props;

    if (!book) {
      return <div className='row'>Unknown</div>;
    }

    return (
      <div className="row">
        <div className="col-sm-7">
          <h3>Book</h3>
          <div className="row">
            <div className="col-sm-3">
              <img src={book.cover} className='img-fluid' alt={book.title}/>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-12"><b>Title</b>: {book.title}</div>
                <div className="col-sm-12"><b>Short description</b>: {book.shortDescription}</div>
                <div className='col-sm-12'><b>Pages</b>: {book.pages}</div>
                <div className='col-sm-12'><b>Language</b>: {book.language}</div>
                <div className='col-sm-12'><b>Progress</b>: {book.progress}%</div>
                <div className='col-sm-12'><b>Min price</b>: {book.minPrice}$</div>
                <div className='col-sm-12'><b>Desired price</b>: {book.desiredPrice}$</div>
                <div className='col-sm-12'><b>Current sum</b>: {book.currentSum}$</div>
                <div className='col-sm-12'><b>Expected sum</b>: {book.expectedSum}$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <Author author={book.author}/>
        </div>
      </div>
    );
  }
}