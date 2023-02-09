import React from 'react';
import './Header.scss';
import cross from '../../Assets/cross.svg';
import ProgressBar from '../Progress/Progressbar';

function Header(props) {
  return (
    <div className="header">
      <div className="header__wrapper">
        <button className="header__button">
          <img src={cross} alt="cross" />
        </button>
        <h1 className="header__title">select your meal</h1>

        <div className="header__stepper">
          <div className="header__stepper__progress--text"> step 1/3</div>
          <div className="header__stepper__circle header__stepper__circle--active"></div>
          <div className="header__stepper__circle"></div>
          <div className="header__stepper__circle"></div>
        </div>
      </div>

      <ProgressBar value={30} />
    </div>
  );
}

export default Header;
