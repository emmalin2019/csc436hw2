//~ import React, {useState} from 'react'

//~ export default function CreateTodo ({user, dispatch}) {

	//~ const [ formData, setFormData ] = useState({
		//~ title: "",
		//~ description: ""
	//~ })

     //~ return (
          //~ <form onSubmit={e => {e.preventDefault(); dispatch({type: "CREATE_TODO", title: formData.title, description: formData.description, author: user});} }>
             
             //~ <div>Author: <b>{user}</b></div>

             //~ <div>
                 //~ <label htmlFor="create-title">Title:</label>
                 //~ <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} name="create-title"  id="create-title" />
             //~ </div>

             //~ <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
             //~ <input type="submit" value="Create" disabled={formData.title.length === 0} />
         //~ </form>   
          //~ )
 //~ }

import React, {useState, useEffect, useContext} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'

import { useNavigation } from 'react-navi'

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    const [todo , createTodo ] = useResource(({ title, description, author }) => ({
        url: '/todos',
        method: 'post',
        data: { title, description, author, dateCreated: Date.now(),
			  complete: false,
			  dateCompleted: null,
			  //id: id(),
			  hidden: false }
    }))

    const navigation = useNavigation()

    const {state, dispatch} = useContext(StateContext)
    const {user} = state;

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }

    function handleCreate () {
        createTodo({ title, description, author: user })
    }

    useEffect(() => {
        if (todo && todo.data) {
            dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description, author: user ,dateCreated:todo.data.dateCreated}) //id: todo.data.id,
            //console.log(post.data)
            navigation.navigate(`/todo/${todo.data.id}`)
        }
    }, [todo])

     return (
          <form onSubmit={e => {e.preventDefault(); handleCreate();} }>
             
             <div>Author: <b>{user}</b></div>

             <div>
                 <label htmlFor="create-title">Title:</label>
                 <input type="text" value={title} onChange={handleTitle} name="create-title"  id="create-title" />
             </div>

             <textarea value={description} onChange={handleDescription} />
             <input type="submit" value="Create" disabled={title.length === 0} />
         </form>   
          )
 }
 
