import React from 'react';
import ShowCategories from '../ShowCategories/ShowCategories';
import RestaurantsInfo from '../RestaurantsInfo/RestaurantsInfo';
import './MainBody.scss';

function MainBody() {
  return (
    <div className="main__body__wrapper">
      <ShowCategories />
      <RestaurantsInfo />
    </div>
  );
}

export default MainBody;
