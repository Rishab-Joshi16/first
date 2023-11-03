import React from 'react';
import './App.css';
import Sample from './components/Sample';
import Sample2 from './components/Sample2';
import Lists from './components/Lists';
import Condition from './components/Condition';
import Events from './components/Events';
import ClassComp from './components/ClassComp';


function App() {
  return (
    <div  className="App">
      <Sample/>
      <Sample2/> 
      <Lists/>
      <Condition />
      <Events/>
      <ClassComp/>
    </div>
  );
}

export default App;
