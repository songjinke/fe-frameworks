/**
 * Question: Is setState async or sync?
 * References:
 * 1. https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
 * 2. https://github.com/facebook/react/issues/11527#issuecomment-360199710
 * 3. https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1282
 */
import React from 'react';

export default class DemoSetStateClass extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    console.log('increment before setState count', this.state.count);

    this.setState({
      count: this.state.count + 1,
    });

    console.log('increment after setState count', this.state.count);
  };

  incrementTriple = () => {
    console.log('incrementTriple before setState count', this.state.count);

    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });

    console.log('incrementTriple after setState count', this.state.count);
  };

  reduce = () => {
    setTimeout(() => {
      console.log('reduce before setState count', this.state.count);

      this.setState({
        count: this.state.count - 1,
      });

      console.log('reduce after setState count', this.state.count);
    });
  };

  reduceTriple = () => {
    setTimeout(() => {
      console.log('reduce before setState count', this.state.count);

      this.setState({
        count: this.state.count - 1,
      });
      this.setState({
        count: this.state.count - 1,
      });
      this.setState({
        count: this.state.count - 1,
      });

      console.log('reduce after setState count', this.state.count);
    }, 0);
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>

        <button onClick={this.incrementTriple}>Triple</button>

        <button onClick={this.reduce}>Reduce v1</button>

        <button onClick={this.reduceTriple}>Reduce v2</button>
      </div>
    );
  }
}
