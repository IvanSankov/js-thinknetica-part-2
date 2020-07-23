import ReactDOM from 'react-dom';
import React from 'react';

import Book from "./components/Book";

export default class App extends React.Component {
    render() {
        return <Book book={this.props.book} />
    }
}

