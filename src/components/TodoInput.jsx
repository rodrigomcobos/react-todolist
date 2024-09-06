
const TodoInput = (props) => {
    //This is grabbing the function from the parent page (App.jsx)
    const { handleAddTodos } = props
    const [todoValue, setTodoValue] = useState('')

    return (
        <header>
            <input value={todoValue} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
            }}>Add</button>
        </header>
    )
}

export default TodoInput