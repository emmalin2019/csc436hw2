function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

export const id = function() {
	// Returns random id number
	return window.crypto.getRandomValues(new Uint32Array(1))[0];
}

function todosReducer (state, action) {
	switch (action.type) {
		case 'CREATE_TODO':
		  const newTodo = { 
			  title: action.title,
			  description: action.description, 
			  author: action.author,
			  dateCreated: Date.now(),
			  complete: false,
			  dateCompleted: null,
			  id: id(),
			  hidden: false
			}
			console.log(state)
			return [ newTodo, ...state ]
		case 'TOGGLE_TODO':
		   var idx = state.findIndex(x => x.id == action.id);
		   state[idx].completed = true;
		   state[idx].dateCompleted = Date.now();
		   return state;
		case 'DELETE_TODO':
		   console.log(action)
		   var idx = state.findIndex(x => x.id == action.id);
		   console.log('idx',idx)
		   console.log('before',state)
		   state[idx].hidden = true;	
		   // ????
		   //state.splice(idx,1)
		   //console.log('after',state)
		   //state=[];
		   // this.setState({ foo: undefined }
		   //
		   return state;
		   //return [ ...state ]
		default:
		   return state;
	}
}

export const appReducer = function(state, action) {
	return {
		user: userReducer(state.user, action),
		todos: todosReducer(state.todos, action)
	}
}

//;
