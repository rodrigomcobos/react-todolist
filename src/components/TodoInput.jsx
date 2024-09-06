import { useState } from "react"
const TodoInput = (props) => {
    //This is grabbing the function from the parent page (App.jsx)
    const { handleAddTodos, todoValue, setTodoValue } = props
    // const [todoValue, setTodoValue] = useState('')

    return (
        <header>
            <input value={todoValue} onChange={(e) => { setTodoValue(e.target.value) }} placeholder="Enter todo..." />
            <button onClick={() => { handleAddTodos(todoValue); setTodoValue('') }}>Add</button>
        </header>
    )
}

export default TodoInput