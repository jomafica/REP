import React from 'react';
import ReactDOM from 'react-dom';
import Top from './top';
import Bottom from './bottom';
import reportWebVitals from './reportWebVitals';
import './style/bootstrap.min.css';
import './style/bootstrap.min.css.map';


ReactDOM.render(
  <React.StrictMode>
    <Top />
  </React.StrictMode>,
  //<React.StrictMode>
  //  <Bottom />
  //</React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
