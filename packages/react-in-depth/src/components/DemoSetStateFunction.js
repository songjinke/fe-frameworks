/**
 * Question: Is setState async or sync?
 * References:
 * 1. https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
 * 2. https://github.com/facebook/react/issues/11527#issuecomment-360199710
 * 3. https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1282
 */
import React, { useState } from 'react';

export default function DemoSetState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log('increment before setState count', count);

    setCount(count + 1);

    console.log('increment after setState count', count);
  };

  const incrementTriple = () => {
    console.log('incrementTriple before setState count', count);

    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    console.log('incrementTriple after setState count', count);
  };

  const reduce = () => {
    setTimeout(() => {
      console.log('reduce before setState count', count);

      setCount(count - 1);

      console.log('reduce after setState count', count);
    }, 0);
  };

  const reduceTriple = () => {
    setTimeout(() => {
      console.log('reduce before setState count', count);

      setCount(count - 1);
      setCount(count - 1);
      setCount(count - 1);

      console.log('reduce after setState count', count);
    }, 0);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>

      <button onClick={incrementTriple}>Triple</button>

      <button onClick={reduce}>Reduce v1</button>

      <button onClick={reduceTriple}>Reduce v2</button>
    </div>
  );
}
