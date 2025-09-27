import { use } from 'react';
import TicketCard from './TicketCard';

const TicketCards = ({ props }) => {

    const { customerPromise, handleSetIssues, resolved, isDarkMode } = props;

    // subtracting the solved issue set from issue set
    const issuesToRemove = new Set(resolved.map(issue => issue.id));
    const customers = use(customerPromise).filter(issue => !issuesToRemove.has(issue.id));

    return (
        <div className={` md:w-3/4 w-full rounded-md`}>

            <h1 className={`md:text-3xl text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : ' text-slate-800'}`}>Customer Tickets</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                {
                    customers.map(customer => <TicketCard
                        key={customer.id}
                        customer={customer}
                        handleSetIssues={handleSetIssues}
                        isDarkMode={isDarkMode}
                    ></TicketCard>
                    )
                }

            </div>
        </div>
    );
};

export default TicketCards;