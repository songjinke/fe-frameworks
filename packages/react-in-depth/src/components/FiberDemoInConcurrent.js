/**
 * References:
 * 1. https://github.com/acdlite/react-fiber-architecture
 * 2. https://blog.ag-grid.com/inside-fiber-an-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/
 * 3. https://reactjs.org/docs/concurrent-mode-adoption.html
 */
import { useState } from 'react';

function FiberDemoInConcurrent() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <div
        onClick={() => {
          setState(state + 1);
        }}
        className="container"
      >
        <p style={{ width: 128, textAlign: 'center' }}>{state}</p>
      </div>
    </div>
  );
}

export default FiberDemoInConcurrent;
