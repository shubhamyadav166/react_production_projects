import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlices'
function Todos() {

    const todos = useSelector(state => state.todos)
    console.log(todos);

    const dispatch = useDispatch()
    return (
        <>
            <div className='flex justify-center item-center flex-col w-full'>
                <h1 className='text-center text-xl mt-10 text-6xl font-bold'>Todos</h1>
                {todos.map((todo) => (

                    <div className='w-full flex justify-center'> <li key={todo.key}
                        className='w-3/4 lg:w-1/2 relative bg-black rounded mt-5 text-white text-3xl lg:px-5'
                    >
                        {todo.text}
                        <button
                            className='bg-red-500 text-white absolute right-0 rounded h-full px-2'
                            onClick={() => dispatch(removeTodo(todo.id))}
                        ><RiDeleteBinLine /></button>
                    </li>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todos
