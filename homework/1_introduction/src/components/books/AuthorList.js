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
    const slice = this.props.dimensions.width >= 960 ? 3 : 1;
    const sliceLength = this.state.showAll ? authors.length : slice;

    return (
      <div className="row">
        {authors.slice(0, sliceLength).map(author => <Author key={author.id} author={author} />)}
        {
          authors.length > sliceLength &&
          <u style={styles.showMore}><span onClick={this.handleClick}>Show more...</span></u>
        }
      </div>
    );
  }
}

const styles = {
  showMore: {
    cursor: "pointer",
  }
};