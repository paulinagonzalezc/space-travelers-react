import React from 'react';
import Rocket from './Rocket';

const RocketsContainer = () => {
  const rockets = [
    {
      id: 0,
      name: 'name 1',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'details 1',
    },
    {
      id: 1,
      name: 'name 2',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'details 2',
    },
    {
      id: 2,
      name: 'name 3',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'details 3',
    },
  ];
  return (
    <div>
      {
      rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))
    }
    </div>
  );
};

export default RocketsContainer;
