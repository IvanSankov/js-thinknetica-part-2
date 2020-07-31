import React from "react";

import HeaderUserInfo from "../user/HeaderUserInfo";

export default class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-8 text-center bg-dark text-white">
          SMarketplace
        </div>
        <div className="col-4">
          <HeaderUserInfo />
        </div>
      </div>
    );
  }
}