import './App.css';

import data from './data';
import GifList from './components/GifList';
import GifForm from './components/GifForm';

function App() {
  const gifs = data;
  const loading = false;
  const error = "";

  return (
    <div className="App">
      <h1>Search for GIF</h1>
      <GifForm />
      {
        loading ? <h3>Loading...</h3> : <GifList gifs={gifs} />
      }
    </div>
  );
}

export default App;
