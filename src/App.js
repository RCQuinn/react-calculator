import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ray"
    };
  }

  render() {
    return (
      <div>
        {/* This displays a state.*/}
        <h3>Hello {this.state.name}</h3>

        {/* This displays a button with a property */}
        <Button symbol="C" />
      </div>
    )
  }
}

export default App;
