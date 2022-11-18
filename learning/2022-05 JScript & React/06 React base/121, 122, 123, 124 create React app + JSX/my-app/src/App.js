// import React from 'react';
import {Component, StrictMode} from 'react';
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

// class Field extends React.Component {
class Field extends Component {
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
  // const p = <p>Log IN P</p>;

  const logged = false;

  return <button>{logged ? 'Enter' : 'Log IN'}</button>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StrictMode>
          <Header />
        </StrictMode>
        <Field />
        <Btn />
        <WhoAmI name='John' surname='Shepard' link='http://facebook.com' />
        <WhoAmI name='John2' surname='NeShepard' link='http://facebook.com' />
      </header>
    </div>
  );
}


//// //// //// 130 task (STATE)
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    }
  }
  nextYear = () => {
    this.setState({
      years: this.state.years + 1,
      text: this.state.text + '+'
    })
  }
  prevYear = () => {
    this.setState(state => ({
      years: state.years - 1
    }))
  }
  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.prevYear}>---</button>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}. Age: {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

export default App;