import React, { useEffect, useState } from 'react';
import { useBreedList } from '../hooks/useBreedList.hook';
import { Results } from './Results';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

export const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  console.log(pets);
  const [breeds] = useBreedList(animal);
  console.log(breeds);

  const requestPets = async () => {
    const resp = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await resp.json();
    setPets(json.pets);
  };

  useEffect(() => {
    requestPets();
  }, []);

  return (
    <div className="search-params" style={{ margin: '16px' }}>
      <form onSubmit={(e) => e.preventDefault()}>
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
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(evt) => setBreed(evt.target.value)}
            onBlur={(evt) => setBreed(evt.target.value)}
          >
            <option />
            {breeds?.map((breed, index) => (
              <option key={index}>{breed}</option>
            ))}
          </select>
        </label>
        <button type="submit"> Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
