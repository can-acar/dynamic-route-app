import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./lib/router";


const options = {
  ext: ['jsx', 'js'],
  dirs: [{
    dir: './pages',
    baseRouter: '/index',
  }, {
    dir: './admin',
    baseRouter: '/index',
  
  }]
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Router options={options}/>
    </React.StrictMode>
);

