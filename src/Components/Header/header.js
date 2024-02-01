import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    // Simulate a login action (you would typically call an authentication API here)
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    // Simulate a logout action
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg ">
          {/* Logo */}
          <div className="container-fluid">
            <a className="navbar-brand px-3" href="#">
              <img
                src="./logo.png"
                alt="Logo"
                style={{ width: '130px', height: '50px' }}
              />
            </a>

            {/* Navbar Toggler */}
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Items */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                {/* Moving Text */}
                <li className="nav-item nav-link fs-5 px-5 mx-auto moving-text" aria-current="page" href="#">
                  Think green, Live sustainable
                </li>

                {/* Menu Items */}
                {this.state.isLoggedIn ? (
                  <>
                <li className="nav-item">
                  <a className="nav-link active fs-5 px-4" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5 px-4" href="#">
                    Calculator
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fs-5 px-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Insights
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">About Carbon Footprint</a></li>
                    <li><a className="dropdown-item" href="#">Steps Towards Sustainability</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5 px-4" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5 px-4" href="#">
                    About
                  </a>
                </li>
                </>
                ):( 
                  <>
                  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fs-5 px-4" href="/insights" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Insights
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/insights">
                      About Carbon Footprint
                    </Link></li>
                    <li><Link className="dropdown-item" to="/insights">
                      Steps towards Sustainability
                    </Link></li>
                  </ul>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link fs-5 px-4" to="/login">
                      Login
                    </Link>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link fs-5 px-4" to="/register">
                      Sign Up
                    </Link>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link fs-5 px-4" to="/about">
                      About
                    </Link>
                </li></>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Separator Line */}
        <hr className="m-0" style={{ borderTop: '2px solid black', width: '100%' }} />
      </div>
    );
  }
}

export default Header;
