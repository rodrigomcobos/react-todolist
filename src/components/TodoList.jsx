import TodoCard from "./TodoCard"

const TodoList = (props) => {
    const { todos } = props

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    // the spread operator passes the props through the todolist straight to the todocard without having having to pass props here
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        {/* To show each todo item, must connect with todocard to display it via props  */}
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}

export default TodoList