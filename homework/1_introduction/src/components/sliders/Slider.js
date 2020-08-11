import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointerShift: props.pointer.left
    };

    this.isMouseDown = false;

    this.handlerOnMouseDown = this.handlerOnMouseDown.bind(this);
    this.handlerOnMouseMove = this.handlerOnMouseMove.bind(this);
    this.handlerOnMouseLeave = this.handlerOnMouseLeave.bind(this);
    this.handlerOnMouseUp = this.handlerOnMouseUp.bind(this);
  }

  handlerOnMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();

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
    const diff = event.clientX - event.currentTarget.getBoundingClientRect().left;
    const leftShift = parseInt(diff / event.currentTarget.offsetWidth * 100);

    this.setState((state, props) => {
      const pointerShift = props.minShift > leftShift ? props.minShift : leftShift;
      if (props.onChange && typeof props.onChange === 'function') {
        props.onChange(pointerShift)
      }

      return {
        pointerShift: `${pointerShift}%`
      }
    });
  }

  render() {
    const {backgroundStyle, text, pointer} = this.props;

    return (
      <div className="row">
        <div className="col-sm-12"
             onMouseMove={this.handlerOnMouseMove}
             onMouseLeave={this.handlerOnMouseLeave}
             onMouseDown={this.handlerOnMouseDown}
             onMouseUp={this.handlerOnMouseUp}
             style={backgroundStyle}>
          {text} <span style={Object.assign({left: this.state.pointerShift}, pointer)}/>
        </div>
      </div>
    );
  }
}

Slider.defaultProps = {
  text: null,
  minShift: 10,
  backgroundStyle: {
    background: "#FFFFFF",
    height: "40px"
  },
  pointer: {
    position: "absolute",
    height: "50px",
    width: "20px",
    background: "black",
    border: "1px solid black",
    top: "-5px",
    cursor: "pointer",
    left: "10%"
  }
}

export default Slider;