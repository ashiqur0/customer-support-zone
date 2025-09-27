import TaskStatusCard from './TaskStatusCard';
import ResolveTaskCard from './ResolveTaskCard';

const TaskStatus = ({ issues, handleSetResolved, resolved, isDarkMode }) => {
    return (
        <div className='md:w-1/4 w-full flex flex-col md:gap-10 gap-5 md:ml-3 mt-5 md:mt-0'>
            <div className={`${isDarkMode? 'bg-slate-800' : 'bg-slate-300'} p-3 rounded-md`}>
                <h1 className={`${isDarkMode? 'text-white' : 'text-slate-800'} md:text-3xl text-xl font-bold mb-4 mt-5 md:mt-0`}>Task Status</h1>
                {
                    !issues.length ? <p className=''>Select a ticket to add to Task Status</p> :
                        issues.map(issue => <TaskStatusCard
                            key={issue.id}
                            issue={issue}
                            handleSetResolved={handleSetResolved}
                        ></TaskStatusCard>)
                }
            </div>
            <div className={`${isDarkMode? 'bg-slate-800' : 'bg-slate-300'} p-3 rounded-md`}>
                <h1 className={`md:text-3xl text-xl font-bold mb-4 ${isDarkMode? 'text-white' : 'text-slate-800'}`}>Resolved Task</h1>
                {
                    !resolved.length ? <p className=''>No resolved tasks yet.</p> :
                        resolved.map(resolve => <ResolveTaskCard 
                            key={resolve.id}
                            resolve={resolve}
                        ></ResolveTaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskStatus;