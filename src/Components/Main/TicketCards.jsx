import TicketCard from './TicketCard';

const TicketCards = () => {

    return (
        <div className='md:w-3/4 w-full'>
            <h1 className='md:text-3xl text-xl font-bold text-slate-800 mb-4'>Customer Tickets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
            </div>
        </div>
    );
};

export default TicketCards;