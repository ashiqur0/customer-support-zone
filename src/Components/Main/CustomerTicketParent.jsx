import TaskStatus from './TaskStatus';
import TicketCards from './TicketCards';

const CustomerTicketParent = ({ props }) => {

    return (
        <div className='md:flex items-start gap-3 px-5'>
            <TicketCards props={props}></TicketCards>
            <TaskStatus props={props}></TaskStatus>
        </div>
    );
};

export default CustomerTicketParent;