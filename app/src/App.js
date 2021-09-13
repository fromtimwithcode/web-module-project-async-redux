import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getGifs } from './actions/index';
import './App.css';

import data from './data';
import GifList from './components/GifList';
import GifForm from './components/GifForm';

function App(props) {
  const { loading, error, getGifs } = props;

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div className="App">
      <h1>Search for GIF</h1>
      <GifForm />
      {
        (error !== "") && <h3>{error}</h3>
      }
      {
        loading ? <h3>Loading...</h3> : <GifList />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapActionsToProps = () => {
  return {
    getGifs
  }
}

export default connect(mapStateToProps, mapActionsToProps())(App);
