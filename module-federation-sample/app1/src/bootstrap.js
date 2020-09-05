import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Data from './data.json';

const DynamicForm = React.lazy(() => import('app2/DynamicForm'));

function App() {
  return (
    <>
      <h1>Hello from Home App</h1>
      <React.Suspense fallback='Loading Form...'>
        <DynamicForm fields={Data} />
      </React.Suspense>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
