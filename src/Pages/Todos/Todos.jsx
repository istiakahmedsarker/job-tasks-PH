import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TodoCard from '../../Components/TodoCard/TodoCard';
import { useForm } from 'react-hook-form';


const Todos = () => {
    const [todoTasks, setTodoTasks] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const todoTasksHeader = 'Todo Tasks'
    const ongoingTasksHeader = 'Ongoing Tasks'
    const completedTasksHeader = 'Completed Tasks'
    const { user } = useAuth()
    const email = user?.email;
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        try {
            axios.get(`http://localhost:5000/getTodoTask/${email}`)
                .then(res => setTodoTasks(res.data))

            axios.get(`http://localhost:5000/getOngoingTasks/${email}`)
                .then(res => setOngoingTasks(res.data))

            axios.get(`http://localhost:5000/getCompletedTasks/${email}`)
                .then(res => setCompletedTasks(res.data))

        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }, []);

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
    const [selectedDate, setSelectedDate] = useState(currentDate.toISOString().split('T')[0]); // State to store the selected date

    const onSubmit = async (data) => {
        const { name, task, priority } = data;

        const todoTask = {
            title: name,
            task: task,
            priority: priority,
            userEmail: email,
            date: selectedDate,
        };

        try {
            if (selectedTask) {
                // If selectedTask exists, it means we are editing an existing task
                const response = await axios.patch(`http://localhost:5000/updateTodoTask/${selectedTask._id}`, todoTask);
                console.log('Task updated successfully!', response.data);
                toast.success('Successfully updated TODO!');
            } else {
                // If selectedTask is null, it means we are creating a new task
                const response = await axios.post('http://localhost:5000/createTodoTask', todoTask);
                console.log('Task created successfully!', response.data);
                toast.success('Successfully Created a TODO!');
            }
        } catch (error) {
            console.error('Error during task creation/edit:', error);
            toast.success('Error during Creating/Editing a TODO!');
        }

        closeModal();
        handleRefresh(); // Refresh the data after creating/editing a task
    };


    // Function to handle modal open
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle modal close
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [{ isOver, draggedItem }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id, item.status),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            draggedItem: monitor.getItem(),
        }),
    }));

    const addItemToSection = (id, status) => {
        // Check if draggedItem is not null before using it
        if (status) {
            console.log(`Item with ID ${id} dropped into section: ${status}`);
            // Call the API to update the task status
            axios.patch(`http://localhost:5000/updateTodoStatus/${id}`, { status })
                .then(res => console.log(res.data));
        }
    };

    const handleDrop = (taskId, sectionName) => {
        console.log(`Item with ID ${taskId} dropped into section: ${sectionName}`);
        // Call the API to update the task status
        axios.patch(`http://localhost:5000/updateTodoStatus/${taskId}`, { status: sectionName })
            .then(res => console.log(res.data));
    };

    const handleRefresh = async () => {
        // Refetch data using Axios and update state
        try {
            const todoTasksResponse = await axios.get(`http://localhost:5000/getTodoTask/${email}`);
            setTodoTasks(todoTasksResponse.data);
        } catch (error) {
            console.error('Error fetching tasks after delete:', error);
        }
    };

    const handleEdit = (task) => {
        // Open the modal and set the selected task for editing
        setIsModalOpen(true);
        setSelectedTask(task);
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
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-4 z-10">
                            <div className="space-y-1 text-sm">
                                <label className="block text-[#b5b2b6]">Title</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Title"
                                    className="w-full px-4 py-3 rounded-md bloc bg-black p-3 text-[#b5b2b6]"
                                    {...register('name')} // Connect the input with React Hook Form
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block text-[#b5b2b6]">Task</label>
                                <input
                                    type="text"
                                    name="task"
                                    placeholder="Task"
                                    className="w-full px-4 py-3 rounded-md bloc bg-black p-3 text-[#b5b2b6]"
                                    {...register('task')} // Connect the input with React Hook Form
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block text-[#b5b2b6]">Priority</label>
                                <select
                                    name="priority"
                                    onChange={(e) => setValue('priority', e.target.value)} // Use setValue to update the value
                                    className="w-full px-4 py-3 rounded-md bloc bg-black p-3 text-[#b5b2b6]"
                                >
                                    <option value="" disabled>
                                        Select Priority
                                    </option>
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
                                <button
                                    onClick={closeModal}
                                    className="p-4 rounded-xl text-[#b5b2b6] btn-primary bg-black hover:bg-[#f7c667] hover:text-black"
                                >
                                    Exit{' '}
                                </button>
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
            <div ref={drop} className="">
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">{todoTasksHeader}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {todoTasks.map((task) => (
                            <TodoCard task={task} status={todoTasksHeader} key={task._id} onRefresh={handleRefresh} onEdit={handleEdit} />
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">{ongoingTasksHeader}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {ongoingTasks.map((task) => (
                            <TodoCard task={task} status={ongoingTasksHeader} key={task._id} onDrop={handleDrop} />
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">{completedTasksHeader}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {completedTasks.map((task) => (
                            <TodoCard task={task} status={completedTasksHeader} key={task._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todos;
