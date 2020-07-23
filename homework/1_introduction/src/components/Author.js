import ReactDom from 'react-dom';
import React from 'react';

export default class Author extends React.Component {
    render() {
        const { author } = this.props;

        return (
            <div className='author' style={{float: 'left'}}>
                <img src={author.avatar} alt={author.name} style={{float: 'left'}} />
                <div className='name'>Name: {author.name}</div>
                <div className='email'>Email: {author.email}</div>
                <div className='bio'>Bio: {author.bio}</div>
            </div>
        );
    }
}