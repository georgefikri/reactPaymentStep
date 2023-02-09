import React from 'react';
import './RestaurantsInfo.scss';
import restaurant from '../../Images/restaurant.jpeg';
import marker from '../../Assets/marker.svg';
import trash from '../../Assets/trash.svg';
import { cartItems } from '../../Mock';
import '../ShowCategories/ShowCategories.scss';

function RestaurantsInfo() {
  return (
    <div className="restaurants__info__wrapper">
      <div className="restaurants__info__wrapper__info">
        <div className="restaurants__info__wrapper__info__image">
          <img src={restaurant} alt="restaurant" />
        </div>
        <div className="restaurants__info__wrapper__info__details">
          <div className="restaurants__info__wrapper__info__details__name">
            <h3>Jawharat Esham Restaurent</h3>
            <div className="detail__description__rating">
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
              <span>4.7</span>
            </div>
          </div>
          <div className="restaurants__info__wrapper__info__details__address">
            <div className="restaurants__address__details">
              Wafi Mall, First Floor, Dubai
            </div>
            <button>
              <img src={marker} alt="marker" />
            </button>
          </div>
          <div className="restaurants__info__wrapper__info__details__type">
            <p>Type of Restaurant</p>
          </div>
        </div>
      </div>

      <div className="restaurants__info__wrapper__cart">
        <div className="restaurants__info__wrapper__cart__items">
          {cartItems.map((item, index) => (
            <div className="detail__description" key={index}>
              <div className="detail__description__left">
                <img src={item.foodPicture} alt={item.foodName} />
              </div>
              <div className="detail__description__right">
                <div className="detail__description__title">{item.foodName}</div>
                <div className="detail__description__lastrow">
                  <div className="detail__description__price">AED {item.foodPrice}</div>
                </div>
              </div>
              <div className="detail__description__action">
                <button className="detail__description__view__select">
                  <object type="image/svg+xml" data={trash} aria-label="remove food" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="restaurants__info__wrapper__total">
        <p>Total Price</p>
        <p>AED 70</p>
      </div>

      <div className="box"></div>
    </div>
  );
}

export default RestaurantsInfo;
