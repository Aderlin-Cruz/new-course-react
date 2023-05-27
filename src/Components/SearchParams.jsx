import React, { useState } from 'react';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];
const BREED = ['Croquetas', 'Semillas', 'Carne'];

export const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  console.log(location);

  return (
    <div className="search-params" style={{ margin: '16px' }}>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="location"
            onChange={(evt) => setLocation(evt.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(evt) => {
              setAnimal(evt.target.value);
              setBreed('');
            }}
            onBlur={(evt) => {
              setAnimal(evt.target.value);
              setBreed('');
            }}
          >
            <option />
            {ANIMALS?.map((animal, index) => (
              <option key={index}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!BREED.length}
            id="breed"
            value={breed}
            onChange={(evt) => setBreed(evt.target.value)}
            onBlur={(evt) => setBreed(evt.target.value)}
          >
            <option />
            {BREED?.map((breed, index) => (
              <option key={index}>{breed}</option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};
