import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../../../redux/todoApp/actions';



const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {

    const [todoValue, setTodoValue] = useState('')
    const [editValue, setEditValue] = useState('');
    const dispatch = useDispatch();



    const handleSubmit = (event) => {
        event.preventDefault();
        let date = new Date();
        let time = date.getTime();

        let todoObj = {
            id: time,
            todo: todoValue,
            complete: false,
        }
        setTodoValue('');
        dispatch(addTodo(todoObj));

    }

    const editSubmit = (e) => {
        e.preventDefault();

        let editObj = {
            id: editTodo.id,
            todo: editValue,
            complete: false
        }
        dispatch(handleEditSubmit(editObj))
    }

    useEffect(() => {
        setEditValue(editTodo.todo)
    }, [editTodo])



    return (
        <div>
            <div className=" pb-5 flex items-center ">
                <div className="w-full">
                    <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">  </h2>
                    <h1 className=" text-4xl text-center font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Write Task ..</span>
                    </h1>
                    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2 mt-10">
                        {editFormVisibility === false ? (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <label className="block mb-2 font-bold text-gray-600">To Do...</label>
                                    <input type="text" id="name" name="name" placeholder="Put your to do list." className="border border-gray-300 shadow p-3 w-full rounded mb-" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} required />
                                </div>
                                <button className="block w-full bg-green-400 hover:bg-green-500 text-white font-bold p-4 rounded-lg">Submit</button>
                            </form>
                        )
                            :
                            (
                                <form onSubmit={editSubmit}>
                                    <button className="block  bg-green-400 hover:bg-green-500 text-white font-bold p-4 btn-circle" onClick={cancelUpdate}>
                                        <FiArrowLeft></FiArrowLeft>
                                    </button>
                                    <div className="mb-5">
                                        <label className="block mb-2 font-bold text-gray-600"> Update To Do...</label>
                                        <input type="text" id="name" name="name" placeholder="Update your to do list." className="border border-gray-300 shadow p-3 w-full rounded mb-" value={editValue || ""}
                                            onChange={(e) => setEditValue(e.target.value)} required />
                                    </div>
                                    <button type='submit' className="block w-full bg-green-400 hover:bg-green-500 text-white font-bold p-4 rounded-lg">Update</button>

                                </form>
                            )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;