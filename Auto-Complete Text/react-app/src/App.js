import React from 'react';
//{import logo from './logo.svg';}
import './App.css'
import AutoCompleteText from "./AutoCompleteText"
import countries from './countries'

function App() {
  return (
    <div className="App">
      <div className="App-Component">
     < AutoCompleteText items={countries}  />
     <br/><br/>
     < AutoCompleteText items={["Sumiran","Aaryan","Zidan"]}  />
     </div>
     
    </div>
  );
}

export default App;
