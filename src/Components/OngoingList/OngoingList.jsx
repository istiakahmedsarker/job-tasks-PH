import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import TodoCard from '../TodoCard/TodoCard';

const OngoingList = () => {
    const { user } = useAuth()
    const email = user?.email
    const [ongoingTasks, setOngoingTasks] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/getOngoingTasks/${email}`)
            .then(res => setOngoingTasks(res.data))

    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {ongoingTasks.map((task) => (
                    <TodoCard task={task} key={task._id} />
                ))}
            </div>
        </div>
    );
};

export default OngoingList;