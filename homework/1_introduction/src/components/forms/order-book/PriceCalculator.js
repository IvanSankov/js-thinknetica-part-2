import React from "react";
import OrderBookFormInput from "./OrderBookFormInput";
import PriceSlider from "./PriceSlider";

export default class PriceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: props.initialPrice,
      marker: "up",
    };

    this.maxPrice = props.minPrice * 10 / 3;

    this.handlerChangeUserPrice = this.handlerChangeUserPrice.bind(this);
    this.handlerChangeAuthorPrice = this.handlerChangeAuthorPrice.bind(this);

    this.handlerChangeSlider = this.handlerChangeSlider.bind(this);
  }

  handlerChangeUserPrice(currentPrice) {
    this._updatePrice(currentPrice, "up");
  }

  handlerChangeAuthorPrice(currentPrice) {
    this._updatePrice(currentPrice, "ae");
  }

  handlerChangeSlider(newPrice, marker) {
    this._updatePrice(newPrice, marker);
  }

  _updatePrice(currentPrice, marker) {
    let maxPrice = converter(this.maxPrice, 'up', marker);

    if (currentPrice > maxPrice) {
      currentPrice = maxPrice;
    }

    this.setState((state, props) => {
      const userPrice = converter(currentPrice, marker, 'up');
      const minPrice = converter(props.minPrice, 'up', marker);

      return {
        marker: marker,
        currentPrice: userPrice < props.minPrice ? minPrice : currentPrice,
      };
    });
  }

  render() {
    const { currentPrice, marker } = this.state;
    const userPrice = converter(currentPrice, marker, 'up');
    const authorEarns = converter(currentPrice, marker, 'ae');

    return (
      <>
        <OrderBookFormInput handler={this.handlerChangeUserPrice}
                            label="You price"
                            name="userPrice" value={userPrice}/>

        <OrderBookFormInput handler={this.handlerChangeAuthorPrice}
                            label="Author earns"
                            name="authorEarns"
                            value={authorEarns}/>

        <div className="col-sm-12">
          <PriceSlider onChange={this.handlerChangeSlider}
                       marker="up"
                       maxPrice={this.maxPrice}
                       currentPrice={userPrice} />
        </div>

        <div className="mt-3 col-sm-12">
          <PriceSlider onChange={this.handlerChangeSlider}
                       marker="ae"
                       maxPrice={this.maxPrice}
                       currentPrice={authorEarns} />
        </div>
      </>
    );
  }
}

function converter(value, from, to) {
  if (from === to) {
    return parseFloat(value).toFixed(2);
  }

  let result = from === 'up' ? value * 0.9 : value * 10 / 9;
  return result.toFixed(2);
}