import {useState, useReducer, useEffect} from 'react';

import MyName from './MyName'
import UserBar from './user/UserBar'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import {id, appReducer} from './reducers';
//import id from './reducers'

//~ function id() {
	//~ // Returns random id number
	//~ return window.crypto.getRandomValues(new Uint32Array(1))[0];
//~ }
function App() {
  const initialTodos = [
    {
      title: "My Todo1",
      description: "Read more",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: false,
      dateCompleted: null,
      id: id(),
      hidden: false
    },
    {
      title: "My Todo2",
      description: "Write more",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: false,
      dateCompleted: null,
      id: id(),
      hidden: false
    },
    {
      title: "My Todo3",
      description: "Learn more",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: false,
      dateCompleted: null,
      id: id(),
      hidden: false
    },
    {
      title: "My Todo4",
      description: "Do more laundry",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: false,
      dateCompleted: null,
      id: id(),
      hidden: false
    },
    {
      title: "My Todo5",
      description: "Study more",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: true,
      dateCompleted: Date.now()-500000000000,
      id: id(),
      hidden: false
    }
  ]
  
  const [ state, dispatch ] = useReducer(
	appReducer, { user: '', todos: initialTodos }
  )

  const {user, todos} = state;

  useEffect(() => {
    if (user) {
       document.title = `${user}’s Blog` 
     } else {
       document.title = 'Blog'
   }
  }, [user])
  
  return (
    <div>
      <UserBar user={user} dispatchUser={dispatch} />
      <br/><br/><hr/><br/> 
      {user && <CreateTodo user={user} dispatch={dispatch} /> }
      <hr/>
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  )
}
      
export default App;
