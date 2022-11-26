import React from 'react';
import pianoImg from "../../assets/piano.png";

function Navigation() {
    return (

      <header className="d-flex justify-content-around w-100">
          <a data-testid="link" className='link' href="/">
          <img
              src={pianoImg}
              alt="Piano"
              width="5%"
            />
            Piano Play
          </a>

            <a data-testid="about" className='link' href="#about">
              About
            </a>

            <a data-testid="piano" className='link' href="#piano">
              Piano
            </a>

            <a data-testid="contact" className='link' href="#contact">
              Contact
            </a>

      </header>
    );
  }

export default Navigation;