// Dependencies
import { createRoot } from 'react-dom/client';

// components
// import { Pet } from './Components/Pet';
import { SearchParams } from './Components/SearchParams';

const App = () => {
  // const pets = [
  //   {
  //     name: 'Terry02',
  //     animal: 'Cotorro',
  //     breed: 'croquetas',
  //   },
  //   {
  //     name: 'Terry03',
  //     animal: 'Cotorro3',
  //     breed: 'croquetas3',
  //   },
  //   {
  //     name: 'Terry04',
  //     animal: 'Cotorro4',
  //     breed: 'croquetas4',
  //   },
  // ];
  return (
    <div>
      {/* <h2>Hello world 002</h2> */}
      {/* <Pet name="Terry02" animal="Cotorro" breed="croquetas" /> */}
      {/* {pets.map((pet) => (
        <Pet key={pet?.name} name={pet?.name} animal={pet?.animal} breed={pet?.breed} />
      ))} */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);
