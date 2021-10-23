//~ import {useState, useReducer, useEffect} from 'react';

//~ import MyName from './MyName'
//~ import UserBar from './user/UserBar'
//~ import CreateTodo from './CreateTodo'
//~ import TodoList from './TodoList'
//~ import {id, appReducer} from './reducers';
//~ import { ThemeContext, StateContext } from './Contexts';
//~ //import id from './reducers'

//~ function App() {
  //~ const initialTodos =
  
  //~ const [ state, dispatch ] = useReducer(
	//~ appReducer, { user: '', todos: initialTodos }
  //~ )

  //~ const {user, todos} = state;

  //~ useEffect(() => {
    //~ if (user) {
       //~ document.title = `${user}’s Blog` 
     //~ } else {
       //~ document.title = 'Blog'
   //~ }
  //~ }, [user])
  
  //~ return (
    //~ <div>
      //~ <UserBar user={user} dispatchUser={dispatch} />
      //~ <br/><br/><hr/><br/> 
      //~ {user && <CreateTodo user={user} dispatch={dispatch} /> }
      //~ <hr/>
      //~ <TodoList todos={todos} dispatch={dispatch} />
    //~ </div>
  //~ )
//~ }
      
//~ export default App;


import React, {useState, useReducer, useEffect} from 'react';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

import { Container } from 'react-bootstrap';

import appReducer from './reducers';


import { ThemeContext, StateContext } from './Contexts';
import CreateTodo from './CreateTodo';
import TodoPage from './pages/TodoPage';
import HeaderBar from './pages/HeaderBar';
import HomePage from './pages/HomePage';

function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '',todos: [] })

  const {user} = state;

  const [ theme, setTheme ] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
 })

 const routes = mount({
  '/': route({ view: <HomePage /> }),
  '/todo/create':route({ view: <CreateTodo /> }),
  '/todo/:id': route(req => {
      return { view: <TodoPage id={req.params.id} /> }
  }),
})



  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Router routes={routes}>
            <Container>
                <HeaderBar setTheme={setTheme} />
                <hr />
                <View />
            </Container>
            </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;

