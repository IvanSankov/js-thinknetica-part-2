import React from "react";
import PriceCalculator from "./PriceCalculator";

export default function BookOrder(props) {
  return (
    <div className="row">
      <div className="col-sm-12">
        <h3>Create order</h3>
        <form>
          <PriceCalculator {...props} />
        </form>
      </div>
    </div>
  );
}