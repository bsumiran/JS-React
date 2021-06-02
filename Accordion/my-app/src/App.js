import React, {useState} from 'react'
import data from './data';
import Question from './Question';
import './App.css';

function App() {
  const [questions,setQuestions]=useState(data)
  return (
    <main>
      <div className="container">
        <h3>question and answers about Login</h3>
        <div className="info">
          
            {
              questions.map(ques=>{
              return  <Question key={ques.id} {...ques} />
              })
            }
         
        </div>
      </div>
    </main>
  );
}

export default App;
