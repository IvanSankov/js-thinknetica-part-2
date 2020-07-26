import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small pt-4">
        <div className="footer-copyright text-center py-3">&copy; {(new Date()).getFullYear()} Copyright:
          <a href="/"> Smarketplace</a>
        </div>
      </footer>
    );
  }
}