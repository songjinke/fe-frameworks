/**
 * Rules of Hooks
 * 1. Only call Hooks at the top level.
 * 2. Only call Hooks from React function components.
 * 
 * Why?
 * source code: https://github.com/facebook/react/blob/51c558aeb6f5b0ae639d975fd4044007a73115c1/packages/react-reconciler/src/ReactFiberHooks.new.js#L1497
 */
import React, { useState } from 'react';

let isMounted = false;
setTimeout(() => (isMounted = true), 1000);

function BadExampleHooks() {
  let name, age, career, setCareer;

  console.log('isMounted is', isMounted);
  if (!isMounted) {
    // eslint-disable-next-line
    [career, setCareer] = useState('developer');
    // eslint-disable-next-line
    [age] = useState('24');
  } else {
    // eslint-disable-next-line
    [name] = useState('Bill');
    // eslint-disable-next-line
    [career, setCareer] = useState('developer');
  }
  console.log('career', career);

  return (
    <div className="personalInfo">
      {name ? <p>Name: {name}</p> : null}
      {age ? <p>Age: {age}</p> : null}
      <p>Career: {career}</p>
      <button
        onClick={() => {
          setCareer('CTO');
        }}
      >
        修改姓名
      </button>
    </div>
  );
}

export default BadExampleHooks;
