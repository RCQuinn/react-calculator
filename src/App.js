import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '0',
      previous: [],
      nextIsReset: false
    };
  }

  render() {
    return (
      <div>
        <h3>Hello World</h3>
      </div>
    )
  }
}

export default App;
