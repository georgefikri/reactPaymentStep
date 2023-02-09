import React, { useState } from 'react';
import './ShowCategories.scss';
import arrowRight from '../../Assets/arrowRight.svg';
import eye from '../../Assets/eye.svg';
// Mock data for tabs and details
import { tabs, details } from '../../Mock';

const ShowCategories = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    const detail = document.getElementById(`detail-${index}`);
    detail.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = (e) => {
    const details = document.getElementsByClassName('detail');
    const tabs = document.getElementsByClassName('tab');

    for (let i = 0; i < details.length; i++) {
      const detail = details[i];
      const tab = tabs[i];

      if (detail.offsetTop <= e.target.scrollTop + 100) {
        setSelectedTab(i);
        for (let j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove('active');
        }
        tab.classList.add('active');
      }
    }
  };

  const handleNavigation = (direction) => {
    if (direction === 'next') {
      if (selectedTab < tabs.length - 1) {
        setSelectedTab(selectedTab + 1);
        scrollTabs('next');
      }
    } else {
      if (selectedTab > 0) {
        setSelectedTab(selectedTab - 1);
        scrollTabs('previous');
      }
    }
  };

  const scrollTabs = (direction) => {
    const tabsContainer = document.querySelector('.tabs-container');
    if (direction === 'next') {
      tabsContainer.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
    } else {
      tabsContainer.scrollBy({
        left: -100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="meals__selector__wrapper">
      <button
        className={`previous ${selectedTab === 0 ? 'hide' : 'show'}`}
        onClick={() => handleNavigation('previous')}
      >
        <img src={arrowRight} alt="arrow left" />
      </button>
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${selectedTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <button
        className={`next ${selectedTab === tabs.length - 1 ? 'hide' : 'show'}`}
        onClick={() => handleNavigation('next')}
      >
        <img src={arrowRight} alt="arrow right" />
      </button>

      <div className="details-container" onScroll={handleScroll}>
        {details.map((detail, index) => (
          <div key={index} className="detail" id={`detail-${index}`}>
            <div className="detail__header">
              <h2>{detail.header}</h2>
              <span>{detail.foodItems.length}</span>
            </div>
            {detail.foodItems.map((item, index) => (
              <div className="detail__description" key={index}>
                <div className="detail__description__left">
                  <img src={item.foodPicture} alt={item.foodName} />
                </div>
                <div className="detail__description__right">
                  <div className="detail__description__title">{item.foodName}</div>
                  <div className="detail__description__lastrow">
                    <div className="detail__description__price">AED {item.foodPrice}</div>
                    <div className="detail__description__rating">
                      <span>{item.foodRating}</span>
                      <span className="detail__description__rating__star">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.00001 0.75L7.5 4.5H11.25L8.25 7L9.75 10.75L6.00001 8.25L2.25 10.75L3.75 7L0.75 4.5H4.5L6.00001 0.75Z" />
                        </svg>
                      </span>
                    </div>
                    <div className="detail__description__brief">
                      {item.foodDescription}
                    </div>
                  </div>
                </div>
                <div className="detail__description__view__select">
                  <object type="image/svg+xml" data={eye} aria-label="show more" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCategories;
