import { useState, useEffect } from "react"
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
  const [todoValue, setTodoValue] = useState('')

  //This function is making sure the data added, deleted or edit is saved or persisted
  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  //This function does the job of adding new todos to the todolist
  //Will be placing this inside the TodoInput where we will input a new todo to the list
  const handleAddTodos = (newTodo) => {
    //This variable is creating a new array and adding the newTodo to the end of the current array
    const newTodoList = [...todos, newTodo]
    //Adding this to the localstorage
    persistData(newTodoList)
    //This is replacing the current todos with the newTodolist which contains the updated values
    setTodos(newTodoList)
  }

  //This function does the job of deleting the todo selected by grabbing the index which has an unique key
  const handleDeleteTodo = (index) => {

    //Using the filter method to return the new array without including the removed index
    const newTodoList = todos.filter((todo, todoIndex) => {

      //return the indexes that are not the one index selected
      return todoIndex !== index
    })
    //Updating localstorage
    persistData(newTodoList)
    //Replace todolist with the newtodolist
    setTodos(newTodoList)
  }

  // This function is used to edit a todo item.
  // It takes the index of the todo item to be edited as an argument.
  // It then sets the todoValue state to the value of the todo item at the given index.
  // Finally, it calls the handleDeleteTodo function with the same index to delete the todo item.
  // The index of the todo item to be edited.
  const handleEditTodo = (index) => {
    // This selects the index of the todo selected
    const valueToBeEdited = todos[index]

    // This sets the todovalue to be the value selected to be edited
    setTodoValue(valueToBeEdited)

    // This deletes it from the list since it will be edited back in the input field
    handleDeleteTodo(index)
  }

  //This is handling the local storage so the items saved in the list get stored in the localstorage
  useEffect(() => {

    //If there is no localstorage return empty
    if (!localStorage) {
      return
    }
    //Assigning localtodos to equal getitem todos from localstorage
    let localTodos = localStorage.getItem('todos')

    //if there are no local todos return empty
    if (!localTodos) {
      return
    }

    //
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, []) //Since the dependency array is empty the page will reload after a refresh

  return (
    <main>
      {/* Need to pass the state values since it was added in the main component */}
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      {/* Need to pass props that will be accessed in the todolist */}
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </main>
  )
}

export default App