import React from 'react';
import './index.css';
import './App.css'
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './Components/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Navbar/>
     <Provider store={store}>
       <Content />
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
