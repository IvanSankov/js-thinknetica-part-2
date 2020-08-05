import React from "react";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.isMouseDown = false;

    this.handlerOnMouseDown = this.handlerOnMouseDown.bind(this);
    this.handlerOnMouseMove = this.handlerOnMouseMove.bind(this);
    this.handlerOnMouseLeave = this.handlerOnMouseLeave.bind(this);
    this.handlerOnMouseUp = this.handlerOnMouseUp.bind(this);
  }

  handlerOnMouseDown(event) {
    this.isMouseDown = true;
    this.reCalculatePointer(event);
  }

  handlerOnMouseMove(event) {
    if (!this.isMouseDown) {
      return;
    }

    this.reCalculatePointer(event);
  }

  handlerOnMouseLeave(event) {
    this.isMouseDown = false;
  }

  handlerOnMouseUp(event) {
    this.isMouseDown = false;
  }

  reCalculatePointer(event) {
    return this.props.reCalculateShift(event, this.props.marker);
  }

  render() {
    const { backgroundStyle, text, pointer } = this.props.settings;

    return (
      <div className="row">
        <div className="col-sm-12"
             onMouseMove={this.handlerOnMouseMove}
             onMouseLeave={this.handlerOnMouseLeave}
             onMouseDown={this.handlerOnMouseDown}
             onMouseUp={this.handlerOnMouseUp}
             style={backgroundStyle}>
          {text} <span style={pointer} />
        </div>
      </div>
    );
  }
}