import axios from 'axios';
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { FaEdit } from 'react-icons/fa'; // Import an edit icon from an icon library

const TodoCard = ({ task, status, onDrop, onRefresh }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id, status },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => onDrop(item.id, status),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const handleDelete = async (_id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/deleteTodo/${_id}`);
            console.log(response.data);

            // Call the onRefresh callback to refetch data and trigger a re-render
            onRefresh();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div ref={drop} className={`bg-[#333333] rounded-md p-4 shadow-md transition-transform transform hover:scale-105 relative`}>
            <div ref={drag} className={`${isDragging ? 'opacity-50' : ''}`}>
                {/* Edit icon */}
                <div className="absolute top-2 right-2">
                    <FaEdit size={20} color="#f7c667" />
                </div>

                {/* Your TodoCard content goes here */}
                <h3 className={`text-lg font-bold mb-2`}>{task.title}</h3>
                <p className="text-[#b5b2b6] mb-2">{task.task}</p>
                <div className="flex flex-col text-[#b5b2b6] mb-2">
                    <span>Priority: {task.priority}</span>
                    <span>Date: {task.date}</span>
                </div>
                <div className="flex justify-between">
                    <button onClick={() => handleDelete(task._id)} className="bg-[#f7c667] text-black px-3 py-1 rounded-md hover:bg-[#e0b754] transition-colors duration-300">Delete</button>
                    <button className="bg-[#f7c667] text-black px-3 py-1 rounded-md hover:bg-[#e0b754] transition-colors duration-300">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;
