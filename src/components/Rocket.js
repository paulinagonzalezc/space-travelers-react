import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { name, description, image } = props;
  return (
    <div className="rocket-container">
      <img className="rocket-image" alt="rocket" src={image} />
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button" className="rocket-reserve-btn">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
