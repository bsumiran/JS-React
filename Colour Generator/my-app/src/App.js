import React,{useState} from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'
import './App.css';


function App() {
  const [color,setColor]=useState("")
  const [error,setError]=useState(false)
  const [list,setList]=useState(new Values('#f15025').all(10))

  const handleSubmit=(e)=>{
     e.preventDefault();
     
     try {
           let colors= new Values(color).all(10)
           setList(colors)
       
     } catch (error) {
       setError(true)
       console.log(error);
     }
  }

  return (
    <>
   <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit} >
        <input type="text" 
                className={`${error ? "error" : null}`} 
               value={color}
               placeholder="#f15025"
                onChange={(e)=> setColor(e.target.value)}
        />
        <button className="btn" type="submit" >Submit</button>
      </form>
   </section>
   <section className="colors">
     {
       list.map((color,index)=>{
         return <SingleColor 
                  key={index}
                   {...color} 
                  index={index} 
                  hexColor={color.hex}
                  />
       })
     }
   </section>
   </>
  );
}

export default App;
