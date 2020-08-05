import React from "react";

export default function Footer(props) {
  return (
    <footer className="page-footer font-small pt-4">
      <div className="footer-copyright text-center py-3">&copy; {(new Date()).getFullYear()} Copyright:
        <a href="/"> Smarketplace</a>
      </div>
    </footer>
  );
}