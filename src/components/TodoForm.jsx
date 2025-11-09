import { useState } from "react";

export default function TodoForm ( { addTodo } )
{
    const [ title, setTitle ] = useState( "" );

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        if ( !title.trim() ) return;
        addTodo( title );
        setTitle( "" );
    };

    return (
        <form onSubmit={ handleSubmit } className="flex gap-2 mb-4">
            <input
                type="text"
                placeholder="Add a new task..."
                value={ title }
                onChange={ ( e ) => setTitle( e.target.value ) }
                className="border p-2 rounded w-64"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
}