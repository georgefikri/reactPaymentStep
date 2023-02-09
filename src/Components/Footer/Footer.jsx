import React from 'react';
import './Footer.scss';
import arrowRight from '../../Assets/arrowRight.svg';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <button>
          <label>payment</label>
          <img src={arrowRight} alt="arrow left" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
