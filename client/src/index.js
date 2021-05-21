import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './style/bootstrap.min.css';
import './style/bootstrap.min.css.map';

import Top from './components/top'
import Center from './components/center'
import Bottom from './components/bottom';


ReactDOM.render(
    <Top />,
  document.getElementById("root"),
);

ReactDOM.render(
    <Center />,
  document.getElementById("body"),
);

ReactDOM.render(
    <Bottom />,
  document.getElementById("toor"),
);

reportWebVitals();
