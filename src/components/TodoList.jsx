export default function TodoList ( { todos, toggleTodo, deleteTodo } )
{
    return (
        <ul className="w-72">
            { todos.map( ( todo ) => (
                <li
                    key={ todo._id }
                    className="flex justify-between items-center bg-white shadow p-2 mb-2 rounded"
                >
                    <span
                        onClick={ () => toggleTodo( todo._id, todo.completed ) }
                        className={ `cursor-pointer ${ todo.completed ? "line-through text-gray-400" : "" }` }
                    >
                        { todo.title }
                    </span>
                    <button
                        onClick={ () => deleteTodo( todo._id ) }
                        className="text-red-500 font-bold"
                    >
                        ✕
                    </button>
                </li>
            ) ) }
        </ul>
    );
}
