import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Todos = () => {
    const [todoTasks, setTodoTasks] = useState([]);
    const { user } = useAuth()
    const email = user?.email;

    const statuses = {
        todo: 'Todo',
        ongoing: 'Ongoing',
        completed: 'Completed',
    };

    useEffect(() => {
        fetch(`http://localhost:5000/getTodoTask/${email}`)
            .then((res) => res.json())
            .then((data) => setTodoTasks(data));
    }, [email]);


    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const currentHour = currentDate.getHours();
    let greeting = '';
    if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good Afternoon';
    } else if (currentHour >= 18) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Good Morning';
    }

    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [priority, setPriority] = useState(''); // State to store the selected priority
    const [selectedDate, setSelectedDate] = useState(currentDate.toISOString().split('T')[0]); // State to store the selected date

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const task = event.target.task.value;
        const todoTasks = {
            title: name,
            task: task,
            priority: priority,
            status: 'todo',
            userEmail: email,
            date: selectedDate
        }

        try {
            // Assuming axios.post returns a promise
            const response = await axios.post('http://localhost:5000/createTodoTask', todoTasks);
            console.log('Data sent successfully!', response.data);
            toast.success('Successfully Created a TODO!')

        } catch (error) {
            console.error('Error during signup:', error);
            toast.success('Error during Creating a TODO!')
        }

        closeModal()
    };

    // Function to handle modal open
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle modal close
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div data-aos="fade-left" className="text-center p-8 bg-[#131313] rounded-md">
            <Toaster />
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <p className="text-lg md:text-xl lg:text-2xl text-white mb-2">{month}<br />{currentDate.getDate()}</p>
                </div>
                <div className="col-span-2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-2">{greeting}.</h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-[#b5b2b6] text-start">What's your plan today?</p>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <div className="modal-container bg-[#333333] w-96 p-4 rounded-md shadow-lg transition-opacity duration-300 opacity-100">
                        {/* Your modal content goes here */}
                        <h2 className="text-xl font-bold mb-4 text-white">Create Your TODO</h2>
                        {/* Add your form or task creation content here */}
                        <form onSubmit={handleSubmit} action="" className="space-y-6 mb-4">
                            <div className="space-y-1 text-sm">
                                <label className="block text-[#b5b2b6]">Title</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Title"
                                    className="w-full px-4 py-3 rounded-md bloc bg-black p-3 text-[#b5b2b6]"
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block text-[#b5b2b6]">Task</label>
                                <input
                                    type="text"
                                    name="task"
                                    placeholder="Task"
                                    className="w-full px-4 py-3 rounded-md bloc bg-black p-3 text-[#b5b2b6]"
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block text-[#b5b2b6]">Priority</label>
                                <select
                                    name="priority"
                                    onChange={(e) => setPriority(e.target.value)}
                                    value={priority}
                                    className="w-full px-4 py-3 rounded-md bloc bg-black p-3 text-[#b5b2b6]"
                                >
                                    <option value="" disabled>Select Priority</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                            {/* Digital Calendar */}
                            <div className="my-4">
                                <label className="block text-[#b5b2b6]">Select Date:</label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="w-full px-4 py-3 rounded-md bloc bg-black p-3 text-[#b5b2b6]"
                                />
                            </div>

                            <div className="flex justify-between">
                                <button onClick={closeModal} className="p-4 rounded-xl text-[#b5b2b6] btn-primary bg-black hover:bg-[#f7c667] hover:text-black">Exit </button>
                                <button
                                    type="submit"
                                    className="p-4 rounded-xl text-[#b5b2b6] btn-primary bg-black hover:bg-[#f7c667] hover:text-black"
                                >
                                    Create Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* "Create Task" button at the end of the page */}
            <div className="flex justify-end mt-4">
                <button onClick={openModal} className="p-4 rounded-xl text-[#b5b2b6] btn-primary bg-[#333333] hover:bg-[#f7c667] hover:text-black">Create TODO</button>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Todo Tasks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {todoTasks.map((task, index) => (
                        <div key={index} className={`bg-[#333333] rounded-md p-4 shadow-md transition-transform transform hover:scale-105`}>
                            <h3 className={`text-lg font-bold mb-2`}>{task.title}</h3>
                            <p className="text-[#b5b2b6] mb-2">{task.task}</p>
                            <div className="flex flex-col text-[#b5b2b6] mb-2">
                                <span>Priority: {task.priority}</span>
                                <span>Date: {task.date}</span>
                            </div>
                            <button className="bg-[#f7c667] text-black px-3 py-1 rounded-md hover:bg-[#e0b754] transition-colors duration-300">Complete</button>
                        </div>
                    ))}
                </div>
            </div>
            


        </div>
    );
};

export default Todos;
