import React from "react";
import { Link } from "react-router-dom";
import { indexPage } from "../../helpers/url-hepler";

export default function Footer(props) {
  return (
    <footer className="page-footer font-small pt-4">
      <div className="footer-copyright text-center py-3">&copy; {(new Date()).getFullYear()} Copyright:
        <Link to={indexPage()}> Smarketplace </Link>
      </div>
    </footer>
  );
}