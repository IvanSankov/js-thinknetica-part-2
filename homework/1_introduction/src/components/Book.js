import ReactDOM from 'react-dom';
import React from 'react';

import Author from './Author'

export default class Book extends React.Component {
  render() {
    const {book} = this.props;

    return (
      <div className='book'>
        <div className='cover' style={{float: 'left'}}>
          <img src={book.cover} alt={book.title}/>
        </div>
        <div className='description'>
          <div className="title">Title: {book.title}</div>
          <div className="short-description">Short description: {book.shortDescription}</div>
          <div className='pages'>Pages: {book.pages}</div>
          <div className='language'>Language: {book.language}</div>
          <div className='progress'>Progress: {book.progress}%</div>
          <div className='min-price'>Min price: {book.minPrice}$</div>
          <div className='desired-price'>Desired price: {book.desiredPrice}$</div>
          <div className='current-sum'>Current sum: {book.currentSum}$</div>
          <div className='expected-sum'>Expected sum: {book.expectedSum}$</div>
        </div>
        <Author author={book.author}/>
      </div>
    );
  }
}