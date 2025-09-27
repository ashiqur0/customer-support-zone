import { use } from 'react';
import TicketCard from './TicketCard';

const TicketCards = ({ customerPromise, handleSetIssues, resolved, isDarkMode }) => {
    let customers = use(customerPromise);

    // This two line of code taken from chaGPT with my understanding
    const issuesToRemove = new Set(resolved.map(issue => issue.id));
    customers = customers.filter(issue => !issuesToRemove.has(issue.id));

    return (
        <div className={`${isDarkMode? 'bg-slate-800':'bg-slate-300'} md:w-3/4 w-full p-4 rounded-md`}>
            <h1 className={`md:text-3xl text-xl font-bold mb-4 ${isDarkMode? 'text-white' : ' text-slate-800'}`}>Customer Tickets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                {
                    customers.map(customer => <TicketCard
                        key={customer.id}
                        customer={customer}
                        handleSetIssues={handleSetIssues}
                        isDarkMode={isDarkMode}
                    ></TicketCard>)
                }

            </div>
        </div>
    );
};

export default TicketCards;