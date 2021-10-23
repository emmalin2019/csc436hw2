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

//export 
const id = function() {
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
			  dateCreated: action.dateCreated,//Date.now(),
			  complete: action.complete,//false,
			  dateCompleted: action.dateCompleted,//null,
			  //id: id(),
			  hidden: action.hidden,//false
			}
			//console.log(newTodo,state)
			return [ newTodo, ...state ]
		case 'TOGGLE_TODO':
		   //~ var idx = state.findIndex(x => x.id == action.id);
		   //~ state[idx].completed = true;
		   //~ state[idx].dateCompleted = Date.now();
		   //~ return state;
		   return state.map((p, i) => {
                if(i === action.id) {
                    p.complete = action.complete;
                    p.dateCompleted = Date.now();
                    console.log(p)
                }
                return p;
            })
		case 'DELETE_TODO':
		   var idx = state.findIndex(x => x.id == action.id);
		   state[idx].hidden = true;
		   return state;
		case 'FETCH_TODOS':
           return action.todos;
		default:
		   return state;
	}
}

export default function appReducer (state, action) {
//export const appReducer = function(state, action) {
	return {
		user: userReducer(state.user, action),
		todos: todosReducer(state.todos, action)
	}
}

