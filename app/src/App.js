import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchStart, fetchSuccess, fetchFail } from './actions/index';
import axios from 'axios';
import './App.css';

import data from './data';
import GifList from './components/GifList';
import GifForm from './components/GifForm';

function App(props) {
  const { loading, error, fetchStart, fetchSuccess, fetchFail } = props;

  useEffect(() => {
    fetchStart();
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=rkfXfbFIpvUmH7shbEXLLbrJLoKpbTgj&q=cats&limit=10&offset=0&rating=g&lang=en`)
      .then(res => {
        fetchSuccess(res.data.data);
      })
      .catch(err => {
        fetchFail(err.meta.msg);
      })
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
    fetchStart,
    fetchSuccess,
    fetchFail
  }
}

export default connect(mapStateToProps, mapActionsToProps())(App);
