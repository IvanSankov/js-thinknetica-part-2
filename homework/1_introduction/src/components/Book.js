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
        <div className="col-sm-8">
          <h3>Book</h3>
          <div className="row">
            <div className="col-sm-3">
              <img src={book.cover} className='img-fluid' alt={book.title}/>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-12">Title: {book.title}</div>
                <div className="col-sm-12">Short description: {book.shortDescription}</div>
                <div className='col-sm-12'>Pages: {book.pages}</div>
                <div className='col-sm-12'>Language: {book.language}</div>
                <div className='col-sm-12'>Progress: {book.progress}%</div>
                <div className='col-sm-12'>Min price: {book.minPrice}$</div>
                <div className='col-sm-12'>Desired price: {book.desiredPrice}$</div>
                <div className='col-sm-12'>Current sum: {book.currentSum}$</div>
                <div className='col-sm-12'>Expected sum: {book.expectedSum}$</div>
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