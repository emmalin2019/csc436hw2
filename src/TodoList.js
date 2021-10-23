import React from 'react'
import Todo from './Todo'
import { StateContext } from './Contexts'
import { useContext } from 'react/cjs/react.development'//////////

//export default function TodoList ({todos = [], dispatch = dispatch}) {
export default function TodoList () {
	  const {state} = useContext(StateContext)
      const {todos} = state;
	return (
		<div>
			<h2>Todo List</h2>
			{todos.map((t, i) =>
				<Todo {...t}
					title={t.title}
					author={t.author} 
					description={t.description}
					dateCreated={t.dateCreated}
					complete={t.complete}
					dateCompleted={t.dateCompleted}
					id={t.id}
					hidden={t.hidden}
					//dispatch={dispatch}
					key={'todo-' + i} />
			)}
		</div> 
	)
}
    



//~ export default function PostList () {
      //~ const {state} = useContext(StateContext)
      //~ const {posts} = state;

     //~ return (
      //~ <div>
       //~ {posts.map((p, i) => 
		   //~ <Post {...p} 
		   //~ short={true}
		   //~ title={p.title} 
		   //~ author={p.author} 
		   //~ key={'post-' + i} 
		   //~ postId={p.id}/>)}
      //~ </div> 
      //~ )
//~ }
    
