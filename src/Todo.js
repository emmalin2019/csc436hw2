import React from 'react'

export default function Todo ({ title, author, description, dateCreated, complete, dateCompleted }) {
  return (
       <div>
          <h3>{title}</h3>
          <div>Description: {description}</div>
          <div>Date created: {new Date(dateCreated).toISOString().split('T')[0]}</div>
          <div>Completed:  
           {complete==true ?<input type="checkbox" checked/> : <input type="checkbox"/>} 
          
         </div>
         
          {complete==true ? 
			  <div>Date completed: {new Date(dateCompleted).toISOString().split('T')[0]}</div> :
			   ""} 
           
          
          <i>Written by <b>{author}</b></i>
      </div> 
 )
}
