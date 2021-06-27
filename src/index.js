import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowList from './ShowList';
import 'bootstrap/dist/css/bootstrap.css';
import shows from './shows.json';

ReactDOM.render(
  <React.StrictMode>
    <ShowList shows={shows}/>
  </React.StrictMode>,
  document.getElementById('root')
);