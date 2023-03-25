import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./lib/router";

const options = {
  ext: ['jsx', 'js'],
  dirs: [{
    dir: 'src/pages',
    baseRouter: '/index',
  }, {
    dir: 'src/admin/pages',
    baseRouter: '/admin',
    
  }]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router options={options}/>
    </React.StrictMode>
);

