import React from 'react';
import { Link, IndexLink } from 'react-router';

export class Nav extends React.Component {
  closeMenu = () => {
    if (window.innerWidth < 600) {
      document.getElementById('nav-toggle').click();
    }
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" id="nav-toggle" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <li className="navbar-brand nav-title" href="#"><span className="first">tim</span><span className="last">mcintire</span></li>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <IndexLink to="/" onClick={this.closeMenu} className="link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink>
              </li>
              <li>
                <Link to="/work" onClick={this.closeMenu} className="link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Work</Link>
              </li>
              <li>
                <Link to="/about" onClick={this.closeMenu} className="link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
              </li>
              <li>
                <Link to="/blog" onClick={this.closeMenu} className="link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Blog</Link>
              </li>
              <li>
                <Link to="/contact" onClick={this.closeMenu} className="link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Contact</Link>
              </li>
              <li className="social-group">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100009296419518"><i className="fa fa-facebook" /></a>
              </li>
              <li className="social-group">
                <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/tim-mcintire"><i className="fa fa-linkedin-square" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
