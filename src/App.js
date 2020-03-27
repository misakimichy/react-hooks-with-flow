import React from 'react'
import './App.css'
import Flow from './Flow'
import HooksUseState from './HooksUseState'
import HooksUseEffect from './HooksUseEffect'

const App = () => {
  return (
    <div className="App">
      <Flow
        str={'Hello World'}
        num={123}
        array={[1, 10, 5, 45, 23]}
      />
      <HooksUseState />
      <HooksUseEffect />
    </div>
  );
}

export default App
