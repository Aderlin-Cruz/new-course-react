import React from 'react';

export const Pet = ({ id, location, images, name, animal, breed }) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images?.length) {
    hero = images[0];
  }
  return (
    <div>
      <a href={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} ${breed} ${location}`}</h2>
        </div>
      </a>
      {/* <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{location}</h1>
      <h2>{animal}</h2>
      <h3>{breed}</h3> */}
    </div>
  );
};
