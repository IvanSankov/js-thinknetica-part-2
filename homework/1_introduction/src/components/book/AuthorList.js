import React from "react";

import Author from "./Author";

export default class AuthorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showAll: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => ({showAll: true}));
  }

  render() {
    const authors = this.props.authors;
    const sliceLength = this.state.showAll ? authors.length : 3;

    return (
      <>
        {authors.slice(0, sliceLength).map(author => <Author key={author.id} author={author} />)}
        {
          authors.length > sliceLength &&
          <u style={styles.showMore}><span onClick={this.handleClick}>Show more...</span></u>
        }
      </>
    );
  }
}

const styles = {
  showMore: {
    cursor: "pointer",
  }
};