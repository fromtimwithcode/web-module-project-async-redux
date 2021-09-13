import { connect } from 'react-redux';
import './App.css';

import data from './data';
import GifList from './components/GifList';
import GifForm from './components/GifForm';

function App(props) {
  const { loading, gifs, error } = props;

  return (
    <div className="App">
      <h1>Search for GIF</h1>
      <GifForm />
      {
        (error !== "") && <h3>{error}</h3>
      }
      {
        loading ? <h3>Loading...</h3> : <GifList gifs={gifs} />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);
