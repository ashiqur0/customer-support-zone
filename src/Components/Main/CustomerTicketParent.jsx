import TaskStatus from './TaskStatus';
import TicketCards from './TicketCards';

const CustomerTicketParent = ({ customerPromise, handleSetIssues, issues, handleSetResolved, resolved }) => {
    return (
        <div className='md:flex items-start gap-3 px-5'>
            <TicketCards
                customerPromise={customerPromise}
                handleSetIssues={handleSetIssues}
            ></TicketCards>

            <TaskStatus
                issues={issues}
                handleSetResolved={handleSetResolved}
                resolved={resolved}
            ></TaskStatus>
        </div>
    );
};

export default CustomerTicketParent;