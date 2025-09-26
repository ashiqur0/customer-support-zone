import TaskStatus from './TaskStatus';
import TicketCards from './TicketCards';

const CustomerTicketParent = () => {
    return (
        <div className='md:flex items-start gap-3 px-3'>
            <TicketCards></TicketCards>
            <TaskStatus></TaskStatus>
        </div>
    );
};

export default CustomerTicketParent;