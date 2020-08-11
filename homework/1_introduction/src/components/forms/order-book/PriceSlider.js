import React from "react";
import Slider from "../../sliders/Slider";

const types = {
  'up': {
    background: "#00BFFF",
    height: "40px"
  },
  'ae':  {
    background: "#00FFFF",
    height: "40px"
  },
};

const pointer = {
  position: "absolute",
  height: "50px",
  width: "20px",
  background: "white",
  border: "1px solid black",
  top: "-5px",
  cursor: "pointer",
  left: "30%"
};

export default class PriceSlider extends React.Component{
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  price2Shift(price) {
    return parseInt(price / this.props.maxPrice * 100);
  }

  shift2Price(shift) {
    return shift * this.props.maxPrice / 100;
  }

  onChange(leftShift) {
    const { onChange, marker } = this.props;
    const newPrice = this.shift2Price(leftShift);

    onChange(newPrice, marker);
  }

  render() {
    const { currentPrice, marker } = this.props
    pointer.left = this.price2Shift(currentPrice) + '%';

    return (
      <Slider onChange={this.onChange} pointer={pointer} text={`$${currentPrice}`} backgroundStyle={types[marker]} />
    );
  }
}