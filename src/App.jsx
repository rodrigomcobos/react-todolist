import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {

  //Anytime a new todo item is inputted, the component will refresh or rerender the page
  //to display the updated values, without useState this would not be possible
  const [todos, setTodos] = useState(
    [ //this becomes the prop, to access it, will need to destructure
      'Go to the gym',
      'Buy milk',
      'Read a book',
      'Do some coding'
    ])

  //This function does the job of adding new todos to the todolist
  //Will be placing this inside the TodoInput where we will input a new todo to the list
  const handleAddTodos = (newTodo) => {
    //This variable is creating a new array and adding the newTodo to the end of the current array
    const newTodoList = [...todos, newTodo]
    //This is replacing the current todos with the newTodolist which contains the updated values
    setTodos(newTodoList)
  }


  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </main>
  )
}

export default App