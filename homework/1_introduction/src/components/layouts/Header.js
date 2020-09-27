import React from "react";
import { Link } from "react-router-dom";
import { indexPage } from "../../helpers/url-hepler";

import HeaderUserInfo from "../user/HeaderUserInfo";

export default function Header(props) {
  return (
    <div className="row">
      <div className="col-6 col-lg-8 text-center bg-dark text-white">
        <Link to={indexPage()}>
          SMarketplace
        </Link>
      </div>
      <div className="col-6 col-lg-4">
        <HeaderUserInfo/>
      </div>
    </div>
  );
}