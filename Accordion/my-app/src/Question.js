import React,{useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question=({id,title,info})=>{
    const [show,setShow]=useState(false)

    const showText=()=>{
        setShow(prevShow=>{
            return !show
        })
    }

   return(
<>
<div className="question">
    <header>
    <h4> {title} </h4>
    <button className="btn" onClick={showText} > {show ? <AiOutlineMinus/>:<AiOutlinePlus/>}  </button>
    </header>
    <p> { show && info} </p>
</div>
</>
   )
}

export default Question