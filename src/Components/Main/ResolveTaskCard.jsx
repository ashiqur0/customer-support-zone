import React from 'react';

const ResolveTaskCard = ({ resolve }) => {
    
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
        <div className={`${isDarkMode? 'bg-slate-950 border-1 border-gray-700 shadow-white' : 'bg-slate-100 border-1 border-gray-300 shadow-slate-800'} px-4 py-4 rounded-md mb-4 cursor-pointer hover:shadow-md `}>
            <h3 className='font-medium'>{resolve.title}</h3>
            <div className='flex justify-between items-center mt-2'>
                <p className='text-green-500'>✅ Completed</p>
                <button className='text-gray-400'>Click to remove</button>
            </div>
        </div>
    );
};

export default ResolveTaskCard;