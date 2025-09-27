import React from 'react';

const TaskStatusCard = ({issue}) => {

    return (
        <div className='bg-white p-4 rounded-md mt-4'>
            <h1 className='font-medium mb-4 text-[1.125rem]'>{issue.title}</h1>
            <button className='bg-green-500 text-white font-semibold py-3 text-center w-full rounded-md'>Complete</button>
        </div>
    );
};

export default TaskStatusCard;