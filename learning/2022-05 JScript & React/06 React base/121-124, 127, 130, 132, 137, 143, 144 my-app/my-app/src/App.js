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
        <div>
          <Field />
          <Btn />
        </div>
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
      text: '+++',
      position: ''
    };
    // BINDING
    this.nextYear = this.nextYear.bind(this)
  }

  // BINDING
  nextYear() {
    this.setState({
      years: this.state.years + 1,
      text: this.state.text + '+'
    })
  }

  // ARROW FUNC
  prevYear = () => {
    this.setState(state => ({
      years: state.years - 1
    }))
  }

  commitInputChanges = (e, param) => {
    console.log(param + this.state.position);
    this.setState({
      position: e.target.value
    });
  }

  render() {
    const {name, surname, link} = this.props,
          {years, position} = this.state;
    return (
      <>
        <hr />
        <button onClick={this.prevYear}>---</button>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name},
            surname - {surname}.
            Age: {years},
            position: {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Input Position:</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'Some params')} />
        </form>
      </>
    )
  }
}

export default App;