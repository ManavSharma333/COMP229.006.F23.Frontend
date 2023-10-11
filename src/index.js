import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import UseStateExample from './components/UseStateExample';
import Counter from './components/UseReducerExample';
import UseContextExample from './components/UseContextExample';
import ComponentC from './components/ComponentC';
import Component3 from './components/Component3';
import StarRating from './components/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseStateExample />
    <p>Test</p>
    <Counter/>
    <UseContextExample Component3={Component3} ComponentC={ ComponentC}/>
    <br/><br/>
    <StarRating/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
