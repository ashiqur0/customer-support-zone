import { use } from 'react';
import TicketCard from './TicketCard';

const TicketCards = ({ customerPromise }) => {
    const customers = use(customerPromise);

    return (
        <div className='md:w-3/4 w-full'>
            <h1 className='md:text-3xl text-xl font-bold text-slate-800 mb-4'>Customer Tickets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                {
                    customers.map(customer => <TicketCard
                        key={customer.id}
                        customer={customer}
                    ></TicketCard>)
                }

            </div>
        </div>
    );
};

export default TicketCards;