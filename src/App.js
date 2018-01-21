import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        This is app root
        <Projects />
      </div>
    );
  }
}

export default App;
