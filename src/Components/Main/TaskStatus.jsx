import TaskStatusCard from './TaskStatusCard';
import ResolveTaskCard from './ResolveTaskCard';

const TaskStatus = ({ issues }) => {
    return (
        <div className='md:w-1/4 w-full flex flex-col md:gap-10 gap-5 md:ml-3'>
            <div>
                <h1 className='md:text-3xl text-xl font-bold text-slate-800 mb-4 mt-5 md:mt-0'>Task Status</h1>
                {
                    !issues.length ? <p className=''>Select a ticket to add to Task Status</p> :
                        issues.map(issue => <TaskStatusCard issue={issue} ></TaskStatusCard>)
                }
            </div>
            <div>
                <h1 className='md:text-3xl text-xl font-bold text-slate-800 mb-4'>Resolved Task</h1>
                {/* <p className=''>No resolved tasks yet.</p> */}
                <ResolveTaskCard></ResolveTaskCard>
                <ResolveTaskCard></ResolveTaskCard>
            </div>
        </div>
    );
};

export default TaskStatus;