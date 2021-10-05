import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Header from './Page/Header';
import MainBody from './Page/MainBody'


ReactDOM.render(
  <div>
    <Header />
    <MainBody />
  </div>,
  document.getElementById('root')
);

