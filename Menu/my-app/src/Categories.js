import React,{useState} from 'react'

const Categories=({categories,filterItems})=>{
     return(
         <div className="btn-container">
            {
                categories.map((category,index)=>{
                  return <button type="button" onClick={()=> filterItems(category)}
                className="filter-btn" key={index} >{category}</button>
                      
                })
            }
             
         </div>
     )
}

export default Categories
