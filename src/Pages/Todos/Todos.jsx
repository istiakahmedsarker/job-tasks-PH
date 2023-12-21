import React, { useState } from 'react';

const Todos = () => {
    // Get the current date
    const currentDate = new Date();
    // Format the month to 3 characters
    const month = currentDate.toLocaleString('default', { month: 'short' });

    // Get the current hour to determine if it's morning, afternoon, or evening
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
    const handleCreateBtn = ()=>{
        console.log('task created')
    }

    // Function to handle modal open
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle modal close
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="text-center p-8 bg-[#131313] rounded-md">
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <p className="text-lg md:text-xl lg:text-2xl text-white mb-2">{month}<br />{currentDate.getDate()}</p>
                </div>
                <div className="col-span-2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-2">{greeting}.</h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-[#b5b2b6] text-start">What's your plan today?</p>
                </div>
                <div className="col-span-1">
                    <button onClick={openModal} className="btn btn-primary">Create Task</button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <div className="modal-container bg-white w-96 p-4 rounded-md shadow-lg transition-opacity duration-300 opacity-100">
                        {/* Your modal content goes here */}
                        <h2 className="text-xl font-bold mb-4">Create Task</h2>
                        {/* Add your form or task creation content here */}
                        <button onClick={closeModal} className="btn btn-primary">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Todos;
