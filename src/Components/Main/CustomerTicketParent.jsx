import TaskStatus from './TaskStatus';
import TicketCards from './TicketCards';

const CustomerTicketParent = ({ customerPromise, handleSetIssues, issues, handleSetResolved, resolved, isDarkMode }) => {
    return (
        <div className='md:flex items-start gap-3 px-5'>
            <TicketCards
                customerPromise={customerPromise}
                handleSetIssues={handleSetIssues}
                resolved={resolved}
                isDarkMode={isDarkMode}
            ></TicketCards>

            <TaskStatus
                issues={issues}
                handleSetResolved={handleSetResolved}
                resolved={resolved}
                isDarkMode={isDarkMode}
            ></TaskStatus>
        </div>
    );
};

export default CustomerTicketParent;