
import MyName from './MyName'
import UserBar from './user/UserBar'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'

function App() {
  const todos = [
    {
      title: "My Todo1",
      description: "Read more",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: false,
      dateCompleted: null,
    },
    {
      title: "My Todo2",
      description: "Write more",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: false,
      dateCompleted: null,
    },
    {
      title: "My Todo3",
      description: "Learn more",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: false,
      dateCompleted: null,
    },
    {
      title: "My Todo4",
      description: "Do more laundry",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: false,
      dateCompleted: null,
    },
    {
      title: "My Todo5",
      description: "Study more",
      author: "Lin Lin",
      dateCreated: Date.now()-1000000000000,
      complete: true,
      dateCompleted: Date.now()-500000000000,
    }
  ]
  console.log(todos);
  return (
    <div>
      <UserBar />
      <br/><br/><hr/><br/> 
      <CreateTodo user="Lin Lin" />
      <hr/>
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
