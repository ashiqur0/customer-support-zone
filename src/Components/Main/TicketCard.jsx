import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const TicketCard = () => {
    return (
        <div className=' bg-white p-4 rounded-md'>
            <div className='flex justify-between'>
                <h2 className='font-semibold md:text-[1.125rem] '>Login Issues - Can't Access Account </h2>
                <div className='font-semibold md:py-1.5 md:px-4 px-2 py-1 bg-green-300 rounded-xl md:rounded-3xl flex items-center gap-1.5'>
                    <p className='md:w-4 md:h-4 w-2 h-2 rounded-full bg-green-600'></p>
                    <p className='text-green-800 text-xs md:text-[1rem]'>Open</p>
                </div>
            </div>
            <p className='mt-2 mb-4 text-gray-500 text-xs md:text-[1rem]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
            <div className='flex justify-between font-medium text-gray-600 items-center text-xs md:text-[1rem]'>
                <div className='flex gap-4 items-center'>
                    <p>#1001</p>
                    <p className='text-red-600'>HIGH PRIORITY</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <p>John Smith</p>
                    <FontAwesomeIcon icon={faCalendar} />
                    <p>1/15/2024</p>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;