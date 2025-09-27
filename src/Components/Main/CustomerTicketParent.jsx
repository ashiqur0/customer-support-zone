import TaskStatus from './TaskStatus';
import TicketCards from './TicketCards';

const CustomerTicketParent = ({customerPromise}) => {
    return (
        <div className='md:flex items-start gap-3 px-5'>
            <TicketCards customerPromise={customerPromise}></TicketCards>
            <TaskStatus></TaskStatus>
        </div>
    );
};

export default CustomerTicketParent;