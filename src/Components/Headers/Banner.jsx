import img from '../../assets/vector1.png'

const Banner = () => {
    
    return (
        <div className='mt-20 flex gap-4 items-center max-w-320 mx-auto text-center text-white'>
            <div className=' bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 w-1/2 rounded-2xl flex items-center'>
                <img className='w-2/5 ' src={img} alt="" />
                <div className='flex flex-col gap-4'>
                    <h3 className='text-2xl'>In-Progress</h3>
                    <p className='text-6xl font-semibold'>0</p>
                </div>
                <img className='w-2/5 scale-x-[-1]' src={img} alt="" />
            </div>
            <div className='bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 w-1/2 rounded-2xl flex items-center'>
                <img className='w-2/5 ' src={img} alt="" />
                <div className='flex flex-col gap-4'>
                    <h3 className='text-2xl'>Resolved</h3>
                    <p className='text-6xl font-semibold'>0</p>
                </div>
                <img className='w-2/5 scale-x-[-1]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner