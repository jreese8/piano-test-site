import React from 'react';
import pianoImg from "../../assets/piano.png";

function Navigation() {
    return (

      <header className="flex-row">
        <h2>
          <a data-testid="link" href="/">
          <img
              src={pianoImg}
              alt="Piano"
              width="5%"
            />
            Piano Play
          </a>
        </h2>

        <nav>

          <ul className="flex-row">
            <li className='mx-2'>
              <a data-testid="about" href="#about">
                About
              </a>
            </li>

            <li className='flex-row'>
              <a data-testid="piano" href="#piano">
                Piano
              </a>
            </li>

            <li className='Contact'>
              <a data-testid="contact" href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </nav>

      </header>
    );
  }

export default Navigation;