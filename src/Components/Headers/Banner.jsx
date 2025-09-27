import img from '../../assets/vector1.png'

const Banner = ({ issues, resolved }) => {

    return (
        <div className='my-5 md:my-20 flex flex-col md:flex-row gap-4 items-center max-w-330 mx-auto text-center text-white px-5'>
            <div className='bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 md:w-1/2 w-full  rounded-[6px] md:rounded-2xl flex items-center justify-between'>
                <img className='md:w-2/5 w-1/3' src={img} alt="" />
                <div className='flex flex-col gap-2 md:gap-4'>
                    <h3 className='text-xl md:text-2xl'>In-Progress</h3>
                    <p className='text-xl md:text-6xl font-semibold'>{issues.length}</p>
                </div>
                <img className='md:w-2/5 w-1/3 scale-x-[-1]' src={img} alt="" />
            </div>
            <div className='bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 md:w-1/2 w-full  rounded-[6px] md:rounded-2xl flex items-center justify-between'>
                <img className='md:w-2/5 w-1/3' src={img} alt="" />
                <div className='flex flex-col gap-2 md:gap-4'>
                    <h3 className='text-xl md:text-2xl'>Resolved</h3>
                    <p className='text-xl md:text-6xl font-semibold'>{resolved.length}</p>
                </div>
                <img className='md:w-2/5 w-1/3 scale-x-[-1]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner