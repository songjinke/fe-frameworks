/**
 * Introducing Hooks
 * Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
 *
 * Motivation
 * 1. It’s hard to reuse stateful logic between components. (render props and higher-order components patterns) -> Hooks allow you to reuse stateful logic without changing your component hierarchy.
 * 2. Complex components become hard to understand. -> Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data).
 * 3. Classes confuse both people and machines. -> Hooks let you use more of React’s features without classes.
 *
 * Do Hooks cover all use cases for classes?
 * There are no Hook equivalents to the uncommon getSnapshotBeforeUpdate, getDerivedStateFromError and componentDidCatch lifecycles yet.
 */
import React, { useState } from 'react';

export default function Button() {
  const [text, setText] = useState('初始文本');

  function changeText() {
    return setText('修改后的文本');
  }

  return (
    <div className="textButton">
      <p>{text}</p>

      <button onClick={changeText}>点击修改文本</button>
    </div>
  );
}
