
const TodoCard = (props) => { //receiving the children from parent component of todos which is in TodoList

    //To be able to use variables from parent components, the prop must be added or else it won't link
    //As you can see, we are using all the variables in the props below in the return
    const { children, handleDeleteTodo, index, handleEditTodo } = props //Accessing the children by destructuring out from the props
    return (
        <li className='todoItem' >
            {/* Adding the children inside curly braces since its javascript, it is a new variable that we set above */}
            {children}
            <div className="actionsContainer">
                <button onClick={() => {
                    handleEditTodo(index)
                }}><i className="fa-solid fa-pen-to-square" /></button>

                <button onClick={() => {
                    handleDeleteTodo(index)
                }}><i className="fa-solid fa-trash-can" /></button>


            </div>
        </li>
    )
}

export default TodoCard