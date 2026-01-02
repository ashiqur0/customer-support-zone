import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const TicketCard = ({ customer, handleSetIssues, isDarkMode }) => {
    const { id, title, description, customerName, priority, status, createdAt } = customer;

    return (
        <div
            onClick={() => handleSetIssues(customer)}
            className={`${isDarkMode ? 'bg-slate-950 border-1 border-gray-700 shadow-white' : 'bg-slate-100 border-1 border-gray-300 shadow-slate-800'} p-4 hover:shadow-md  rounded-md cursor-pointer`}>

            <div className='flex justify-between'>
                <h2 className='font-semibold md:text-[1.125rem] text-[14px]'>{title}</h2>

                <div className={`font-semibold md:py-1.5 md:px-4 px-2 py-1 rounded-xl md:rounded-3xl flex items-center gap-1.5 ${status === 'Open' ? 'bg-green-300' : 'bg-amber-200'}`}>
                    <p
                        className={`md:w-4 md:h-4 w-2 h-2 rounded-full 
                            ${status === 'Open' ? 'bg-green-600' : 'bg-amber-400'}
                        `}>
                    </p>
                    <p
                        className={`text-xs md:text-[14px] 
                            ${status === 'Open' ? 'text-green-800' : 'text-yellow-600'}
                        `}>{status}
                    </p>
                </div>
            </div>

            <p
                className={`
                    ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} 
                    mt-2 mb-4 text-xs md:text-[14px]`}
            >{description}
            </p>

            <div className={`
                ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} 
                flex justify-between font-medium items-center text-[11px] md:text-[14px]`}>

                <div
                    className='flex gap-4 items-center'>
                    <p>#{id}</p>

                    <p className={`
                        ${priority === 'HIGH PRIORITY' && 'text-red-500' ||
                        priority === 'MEDIUM PRIORITY' && 'text-amber-500' ||
                        priority === 'LOW PRIORITY' && 'text-green-500'
                        }
                    `}>{priority}</p>
                </div>

                <div className='flex gap-4 items-center'>
                    <p>{customerName}</p>

                    <div className='flex items-center gap-1'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>{createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;