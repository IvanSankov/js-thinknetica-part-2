import React from "react";

const styles = {
  scroll: {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    width: "40px",
    height: "40px",
    background: "pink",
    textAlign: "center",
    borderRadius: "50%",
    cursor: "pointer",
  }
};

const MIN_SCROLL_POSITION = 100;

export default class Scroll2Up extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisplay: false
    };

    this._scrollHandler = this._scrollHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this._scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._scrollHandler);
  }

  handlerClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  _scrollHandler() {
    const {isDisplay} = this.state;
    const needDisplay = window.scrollY > MIN_SCROLL_POSITION;

    if ((needDisplay && isDisplay) || (!needDisplay && !isDisplay)) {
      return;
    }

    this.setState({
      isDisplay: needDisplay,
    });
  }

  render() {
    const {isDisplay} = this.state;
    return isDisplay && <div style={styles.scroll} onClick={this.handlerClick}>UP</div>;
  }
}