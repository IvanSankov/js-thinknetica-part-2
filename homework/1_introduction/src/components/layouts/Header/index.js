import React from "react";
import { Link } from "react-router-dom";
import {indexPage, wishlistPage} from "../../../helpers/url-hepler";

import UserInfo from "./UserInfo";
import Wishlist from "./Wishlist";

export default function Header(props) {
  return (
    <div className="row">
      <div className="col-3 col-lg-6 text-center bg-dark text-white">
        <Link to={indexPage()}>
          SMarketplace
        </Link>
      </div>
      <div className="col-6 col-lg-4">
        <UserInfo/>
      </div>
      <div className="col-3 col-lg-2">
        <Link to={wishlistPage()}>
          <Wishlist />
        </Link>
      </div>
    </div>
  );
}