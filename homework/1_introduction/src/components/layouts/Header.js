import React from "react";

import HeaderUserInfo from "../user/HeaderUserInfo";

export default function Header(props) {
  return (
    <div className="row">
      <div className="col-8 text-center bg-dark text-white">
        SMarketplace
      </div>
      <div className="col-4">
        <HeaderUserInfo/>
      </div>
    </div>
  );
}