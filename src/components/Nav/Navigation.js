import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import pianoImg from "../../assets/piano.png";

function Navigation() {
      return (

      <nav className="navbar" role="navigation">
        <Nav className="w-100">
          <div className="d-flex justify-content-around w-100">

            <Link className="title" to="/">
              <img
              src={pianoImg}
              alt="Piano"
            />
            Piano Play
            </Link>

            <Link className='link' to="/">
              Home
            </Link>

            <Link className='link' to="/piano">
              Piano
            </Link>

            <Link className='link' to="/contact">
              Contact
            </Link>

          </div>
        </Nav>
      </nav>
    );
  }

export default Navigation;