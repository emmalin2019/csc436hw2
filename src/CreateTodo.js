import React from 'react'

export default function CreateTodo ({user}) {
	
     return (
          <form onSubmit={e => e.preventDefault() }>
             <h2>Create New Todo</h2>
             <div>Author: <b>{user}</b></div>

             <div>
                 <label htmlFor="create-title">Title:</label>
                 <input type="text" name="create-title" id="create-title" required />
             </div>

             <textarea name="create-description"  />
             <input type="submit" value="Create" />
         </form>   
          )
 }
 
