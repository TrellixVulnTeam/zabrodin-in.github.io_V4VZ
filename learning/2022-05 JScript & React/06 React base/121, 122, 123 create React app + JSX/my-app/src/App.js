import React from 'react';
import './App.css';

const Header = () => {
  return 'Hello WWWorld!';
}

/* const Field = () => {
  const holder = 'Enter here';
  const styledField = {
    width: '300px'
  };
  return <input
        placeholder={holder} 
        type='text' 
        style={styledField}/>
} */

class Field extends React.Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    };
    return <input
          placeholder={holder} 
          type='text' 
          style={styledField}/>
  }
}

function Btn() {
  // const text = `log in`;

  /* const res = () => {
    return `log in 2`;
  } */
  const p = <p>Log IN P</p>;

  const logged = false;

  return <button>{logged ? 'Enter' : 'Log IN'}</button>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Field />
        <Btn />
      </header>
    </div>
  );
}

export default App;
