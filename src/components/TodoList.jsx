import TodoCard from "./TodoCard"

const TodoList = () => {
    let todos = [
        'Go to the gym',
        'Buy milk',
        'Read a book',
        'Do some coding'
    ]


    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex}>
                        {/* To show each todo item, must connect with todocard to display it via props  */}
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}

export default TodoList