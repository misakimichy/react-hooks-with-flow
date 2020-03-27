import React from 'react'
import './App.css'
import Flow from './Flow'

const App = () => {
  return (
    <div className="App">
      <Flow
        str={'Hello World'}
        num={123}
        array={[1, 10, 5, 45, 23]}
      />
    </div>
  );
}

export default App
