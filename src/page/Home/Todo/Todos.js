import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { removeTodo, handleCheckbox } from '../../../redux/todoApp/actions';


export const Todos = ({ handleEditClick, editFormVisibility }) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.operationsReducer);


    return todos.map((todo) => (
        <div>
            <div className="p-4 hover:scale-105 duration-500">
                <div className=" flex-row  justify-center items-center p-4  rounded-lg bg-white shadow-indigo-50 shadow-md default_shadow">

                    <div className='text-center'>
                        <h3 className="mt-2 text-xl font-bold text-green-500 text-center">
                            <p className='mr-5' style={todo.complete === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{todo.todo}</p>
                        </h3>
                    </div>
                    <div className='flex flex-row justify-center gap-2'>
                        {editFormVisibility === false && (
                            <div className=''>
                                <input type="checkbox" checked={todo.complete} className="checkbox checkbox-success btn-sm mt-6 px-2 py-2 bg-white  text-white btn-circle  hover:bg-green-500 outline-none" onChange={() => dispatch(handleCheckbox(todo.id))} />
                            </div>
                        )}

                        {editFormVisibility === false && (
                            <div className=''>
                                <button onClick={() => handleEditClick(todo)} className="btn-sm mt-6 px-2 py-2 bg-green-400  text-white btn-circle  hover:bg-green-500 outline-none">  <FiEdit2></FiEdit2></button>

                                <button onClick={() => dispatch(removeTodo(todo.id))} className="btn-sm mt-6 px-2 py-2 bg-green-400  text-white btn-circle  hover:bg-green-500 outline-none ml-2"><FiTrash2></FiTrash2></button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div >
    ));
};
