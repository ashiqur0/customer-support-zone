import React from 'react';

const TaskStatusCard = ({ issue, handleSetResolved, isDarkMode }) => {

    return (
        <div className={`${isDarkMode? 'bg-slate-950 border-1 border-gray-700 shadow-white': 'bg-slate-100 border-1 border-gray-300 shadow-slate-800'} p-4 hover:shadow-md rounded-md mt-4 cursor-pointer`}>
            <h1 className='font-medium mb-4'>{issue.title}</h1>
            <button 
                onClick={() => {
                    handleSetResolved(issue);

                }}
                className='bg-green-500 hover:bg-green-400 text-white font-semibold py-2 text-center w-full rounded-md'>Complete</button>
        </div>
    );
};

export default TaskStatusCard;