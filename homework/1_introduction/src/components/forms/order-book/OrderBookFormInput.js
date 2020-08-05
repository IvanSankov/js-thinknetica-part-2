import React from "react";

export default function OrderBookFormInput(props) {
  const { value, label, name, marker, handler } = props

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type="number"
             step="0.01"
             onChange={handler}
             data-marker={marker}
             className="form-control"
             name={name}
             id={label}
             value={value} />
    </div>
  );
}