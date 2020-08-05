import React from "react";
import OrderBookFormInput from "./OrderBookFormInput";
import converter from "./converter";

export default class OrderBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: props.initialPrice,
      marker: "up",
    };

    this.handlerChangeInput = this.handlerChangeInput.bind(this);
  }

  handlerChangeInput(event) {
    const { target } = event;
    const currentPrice = parseFloat(target.value);
    const marker = target.dataset.marker;

    /* Все работает, одна если я захочу набрать, число, он сбрасывает до минимума, допустим, у меня минимальная
      цена 100 и я хочу руками набрать 2000, то как только я кликну 2, у меня сразу будет проверка на минимальность и
      автоматом проставится ноль. Что делать? как быть? засунуть this.setState в какой-нибудь setTimout и хранить
      идентификатор этого таймаута и чистить его clearTimout(timerId) после того как трегерится handlerChangeInput?
      больше вариантов у меня нет :-(
    */
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

    return (
      <div className="row">
        <div className="col-sm-12">
          <h3>Create order</h3>
          <form>
            <OrderBookFormInput handler={this.handlerChangeInput}
                                marker="up"
                                label="You price"
                                name="userPrice" value={converter(currentPrice, marker, 'up') } />
            <OrderBookFormInput handler={this.handlerChangeInput}
                                marker="ae"
                                label="Author earns"
                                name="authorEarns"
                                value={converter(currentPrice, marker, 'ae')} />
          </form>
        </div>
      </div>
    );
  }
}