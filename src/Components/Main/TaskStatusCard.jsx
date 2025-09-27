import React from 'react';

const TaskStatusCard = ({ issue, handleSetResolved }) => {

    // below one line of code copied from chatGPT with understanding
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
        <div className={`${isDarkMode? 'bg-slate-950 shadow-white': 'bg-slate-100 shadow-slate-800'} p-4 hover:shadow-md rounded-md mt-4`}>
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