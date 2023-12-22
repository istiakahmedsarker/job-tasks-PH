import React from 'react';
import { useDrag } from 'react-dnd';

const TodoCard = ({ task,status }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    console.log(isDragging,status)
    return (
        <div>
            <div key={task._id} ref={drag} className={`bg-[#333333] rounded-md p-4 shadow-md transition-transform transform hover:scale-105`}>
                <h3 className={`text-lg font-bold mb-2`}>{task.title}</h3>
                <p className="text-[#b5b2b6] mb-2">{task.task}</p>
                <div className="flex flex-col text-[#b5b2b6] mb-2">
                    <span>Priority: {task.priority}</span>
                    <span>Date: {task.date}</span>
                </div>
                <button className="bg-[#f7c667] text-black px-3 py-1 rounded-md hover:bg-[#e0b754] transition-colors duration-300">Complete</button>
            </div>
        </div>
    );
};

export default TodoCard;