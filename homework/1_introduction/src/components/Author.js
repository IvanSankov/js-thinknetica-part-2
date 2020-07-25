import ReactDOM from 'react-dom';
import React from 'react';

export default class Author extends React.Component {
  render() {
    const {author} = this.props;

    if (!author) {
      return <div className='row'>Unknown</div>;
    }

    return (
      <div className='row'>
        <h3>Author</h3>
        <div className="col-sm-12">
          <img src={author.avatar} className='img-fluid' alt={author.name}/>
        </div>
        <div className='col-sm-12'>Name: {author.name}</div>
        <div className='col-sm-12'>Email: {author.email}</div>
        <div className='col-sm-12'>Bio: {author.bio}</div>
      </div>
    );
  }
}