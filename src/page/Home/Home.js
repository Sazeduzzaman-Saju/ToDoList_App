import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from '../../redux/todoApp/actions';
import Footer from '../Footer/Footer';
import Form from './From/Form';
import Header from './Header/Header';
import Hero from './Hero.js/Hero';
import { Todos } from './Todo/Todos';


const Home = () => {

    const [editFormVisibility, setEditFormVisibility] = useState(false);
    const todos = useSelector((state) => state.operationsReducer);
    const dispatch = useDispatch();
    const [editTodo, setEditTodo] = useState('');

    const handleEditClick = (todo) => {
        setEditFormVisibility(true)
        setEditTodo(todo)
    }

    const cancelUpdate = () => {
        setEditFormVisibility(false)
    }
    return (
        <section className=''>
            <Header></Header>
            <Hero></Hero>
            <Form
                editTodo={editTodo}
                editFormVisibility={editFormVisibility}
                handleEditClick={handleEditClick}
                cancelUpdate={cancelUpdate}>
            </Form>
            <div className='max-w-screen-lg mx-auto'>
                <section class="text-gray-600 body-font  ">
                    <div class="container mx-auto">
                        <div class=" todo_container">
                            <Todos editFormVisibility={editFormVisibility} handleEditClick={handleEditClick} ></Todos>
                        </div>
                    </div>

                </section>
                <div className='pb-10 pt-5'>
                    {
                        todos.length > 0 && (<button className="bn632-hover bn22" onClick={() => dispatch(deleteAll())}>Delete All</button>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Home;