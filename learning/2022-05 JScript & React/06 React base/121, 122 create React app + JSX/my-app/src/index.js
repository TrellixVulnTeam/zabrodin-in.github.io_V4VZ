import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const text = `Hello World!`;
const elem = (
  <div>
    <h2 className='name'>{text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex={0}>Click</button>
    
  </div>
  );

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);