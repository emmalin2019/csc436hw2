import React from 'react'

export default function Todo ({
  title, author, description, dateCreated, complete, dateCompleted, id,
  hidden, dispatch }) {
  return (
   <div>
    {hidden == true ? '' :
      <div>
        <h3>{title}</h3>
        <div>ID: {id}</div>
        <div>Description: {description}</div>
        <div>Date created: {new Date(dateCreated).toISOString().split('T')[0]}</div>
        <div>Completed:  
         {complete==true ?
           <input type="checkbox" checked disabled /> :
           <input type="checkbox" 
               onClick={e => {
                 let dc = Date.now();
                 dispatch({type:"TOGGLE_TODO", id: id, dateCompleted: dc});
                 e.target.disabled = true;
                 let j = document.createElement('div');
                 j.innerText = 'Date completed: ' + 
                   new Date(dc).toISOString().split('T')[0];
                 e.target.parentNode.parentNode.appendChild(j);
               }}
             />
          } 
        
       </div>
        
        <i>Written by <b>{author}</b></i>
        
        {complete == true ? 
          <div id={"id-" + id}>Date completed: 
           {new Date(dateCompleted).toISOString().split('T')[0]}</div> :
           ""
        } 
        <div>
          <button 
            onClick={e => {
              e.preventDefault();
               //this.setState({ : undefined }
               dispatch({type:"DELETE_TODO", id: id});
               //let todoDiv = e.target.parentNode.parentNode;
               //todoDiv.parentNode.removeChild(todoDiv);
               // 
               //React.render(todoDiv);
             }}
          >Delete</button>
        </div>
      </div>
    }
  </div> 
 )
}
