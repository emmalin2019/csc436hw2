//~ import React from 'react'

//~ export default function CreateTodo ({user}) {
	
     //~ return (
          //~ <form onSubmit={e => e.preventDefault() }>
             //~ <h2>Create New Todo</h2>
             //~ <div>Author: <b>{user}</b></div>

             //~ <div>
                 //~ <label htmlFor="create-title">Title:</label>
                 //~ <input type="text" name="create-title" id="create-title" required />
             //~ </div>

             //~ <textarea name="create-description"  />
             //~ <input type="submit" value="Create" />
         //~ </form>   
          //~ )
 //~ }
 


import React, {useState} from 'react'

export default function CreateTodo ({user, dispatch}) {

	const [ formData, setFormData ] = useState({
		title: "",
		description: ""
	})

     return (
          <form onSubmit={e => {e.preventDefault(); dispatch({type: "CREATE_TODO", title: formData.title, description: formData.description, author: user});} }>
             
             <div>Author: <b>{user}</b></div>

             <div>
                 <label htmlFor="create-title">Title:</label>
                 <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} name="create-title"  id="create-title" />
             </div>

             <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
             <input type="submit" value="Create" disabled={formData.title.length === 0} />
         </form>   
          )
 }
