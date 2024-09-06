
const TodoCard = (props) => { //receiving the children from parent component of todos which is in TodoList
    const { children } = props //Accessing the children by destructuring out from the props
    return (
        <li className='todoItem' >
            {/* Adding the children inside curly braces since its javascript, it is a new variable that we set above */}
            {children}
            <div className="actionsContainer">
                <i className="fa-solid fa-pen-to-square" />
                <i className="fa-solid fa-trash-can" />
            </div>
        </li>
    )
}

export default TodoCard