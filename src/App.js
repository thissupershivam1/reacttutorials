import React from 'react';
import './App.css';
import HelloFunctional from './components/HelloFunctional';
import HelloClass from './components/Helloclass';
import {HelloFunctionalES6} from './components/HelloFunctionalES6';

function App() {
  return (
    <div className="App">
     
        
          Hello App Component
          <HelloFunctional></HelloFunctional>
          <HelloFunctional></HelloFunctional>
          <HelloFunctional></HelloFunctional>
          <HelloClass/>
          <HelloFunctionalES6/>

       
    </div>
  );
}

export default App;
