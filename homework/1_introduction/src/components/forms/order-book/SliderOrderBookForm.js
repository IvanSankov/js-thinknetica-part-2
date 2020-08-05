import React from "react";
import converter from "./converter";
import Slider from "../../sliders/Slider";

const styles = {
  userPriceBlock: {
    background: "#00BFFF",
    height: "40px"
  },
  authorEarnsBlock: {
    background: "#00FFFF",
    height: "40px"
  },
  pointer: {
    position: "absolute",
    height: "50px",
    width: "20px",
    background: "white",
    border: "1px solid black",
    top: "-5px",
    cursor: "pointer",
    left: "10%"
  }
};

export default class SliderOrderBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.maxPrice = props.minPrice * 10 / 3;

    this.state = {
      currentPrice: props.initialPrice,
      marker: 'up',
      userShift: '30%',
      authorShift: parseInt(converter(props.minPrice, 'up', 'ae') / this.maxPrice * 100) + '%'
    }

    this.reCalculateShift = this.reCalculateShift.bind(this);
  }

  reCalculateShift(event, marker) {
    const diff = event.clientX - event.currentTarget.getBoundingClientRect().left;
    const leftShift = parseInt(diff / event.currentTarget.offsetWidth * 100);

    this.setState((state, props) => {
      const oldPrice = converter(state.currentPrice, state.marker, marker);
      let newPrice;
      let userShift;
      let authorShift;

      if (marker === 'up') {
        newPrice = parseFloat((oldPrice / parseInt(state.userShift)  * leftShift).toFixed(2));
        userShift = leftShift + '%';
        authorShift = parseInt(converter(newPrice, 'up', 'ae') / this.maxPrice * 100) + '%'
      } else {
        newPrice = parseFloat((oldPrice / parseInt(state.authorShift) * leftShift).toFixed(2));
        authorShift = leftShift + '%';
        userShift = parseInt(converter(newPrice, 'ae', 'up') / this.maxPrice * 100) + '%'
      }

      if (parseInt(userShift) > 100 || parseInt(userShift) < 30) {
        return {};
      }

      return {
        currentPrice: newPrice,
        marker: marker,
        userShift: userShift,
        authorShift: authorShift,
      };
    });
  }

  render() {
    const userSlider = {
      backgroundStyle: {...styles.userPriceBlock},
      pointer: {...styles.pointer},
      text: `$${converter(this.state.currentPrice, this.state.marker, 'up')}`
    };

    const authorSlider = {
      backgroundStyle: {...styles.authorEarnsBlock},
      pointer: {...styles.pointer},
      text: `$${converter(this.state.currentPrice, this.state.marker, 'ae')}`
    };

    userSlider.pointer.left = this.state.userShift;
    authorSlider.pointer.left = this.state.authorShift;

    return (
      <div className="row">
        <div className="col-sm-12">
          <Slider reCalculateShift={this.reCalculateShift}
                  marker="up"
                  settings={userSlider} />
        </div>
        <div className="mt-3 col-sm-12">
          <Slider reCalculateShift={this.reCalculateShift} marker="ae" settings={authorSlider} />
        </div>
      </div>
    );
  }
}