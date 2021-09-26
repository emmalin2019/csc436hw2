import React from 'react'
import Todo from './Todo'

export default function TodoList ({todos = []}) {
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
					key={'todo-' + i} />
			)}
		</div> 
	)
}
    
