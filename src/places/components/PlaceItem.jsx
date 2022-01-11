import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './PlaceItem.css';

const PlaceItem = (props) => {
  const { image, title, address, description } = props;
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <button type="button">VIEW ON MAP</button>
          <button type="button">EDIT</button>
          <button type="button">DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
