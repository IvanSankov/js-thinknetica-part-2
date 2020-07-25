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
        <div className='col-sm-12'><b>Name</b>: {author.name}</div>
        <div className='col-sm-12'><b>Email</b>: {author.email}</div>
        <div className='col-sm-12'><b>Bio</b>: {author.bio}</div>
      </div>
    );
  }
}