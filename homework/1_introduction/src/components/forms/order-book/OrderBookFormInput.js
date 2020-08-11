import React from "react";

export default class OrderBookFormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }

    this.prevValue = props.value;

    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onBlur(event) {
    const { target } = event;
    let currentPrice = parseFloat(target.value);

    if (isNaN(currentPrice)) {
      currentPrice = 0;
    }

    if (this.props.handler && typeof this.props.handler === 'function') {
      this.props.handler(currentPrice);
    }

    this.prevValue = currentPrice;
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.prevValue !== this.props.value) {
      this.prevValue = this.props.value;
      this.setState({
        value: parseFloat(this.props.value)
      });
    }
  }

  render() {
    const {label, name } = this.props;
    const { value } = this.state;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type="number"
               step="0.01"
               onBlur={this.onBlur}
               onChange={this.onChange}
               className="form-control"
               name={name}
               id={label}
               value={value} />
      </div>
    );
  }
}