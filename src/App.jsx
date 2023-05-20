//Dependencies
import { createRoot } from 'react-dom/client';

//components
import { Pet } from './Pet';

const App = () => (
  <div>
    {/* <h2>Hello world 002</h2> */}
    <Pet name="Terry02" animal="Cotorro" breed="croquetas" />
  </div>
);

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);
