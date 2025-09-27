import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ isDarkMode }) => {
    return (
        <div className={`${isDarkMode? 'bg-slate-900 text-white' : 'bg-white'} shadow-xl py-3 px-3`}>
            <div className='flex justify-start  max-w-320 mx-auto '>
                <details className="dropdown w-100vw block  md:hidden">
                    <summary className="btn m-1"><FontAwesomeIcon icon={faBars} /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>Home</li>
                        <li>FAQ</li>
                        <li>Changelog</li>
                        <li>Blog</li>
                        <li>Download</li>
                        <li>Contact</li>
                        <li>
                            <button className='flex items-center gap-3 bg-gradient-to-br from-indigo-800 via-violet-700 to-fuchsia-600 px-4 py-2 rounded-md font-bold text-white'>
                                <span>+</span>
                                <span>New Ticket</span>
                            </button>
                        </li>
                    </ul>
                </details>

                <div className='w-full flex justify-between items-center cursor-pointer'>
                    <h1 className='font-bold md:text-2xl hover:text-3xl'>CS — Ticket System</h1>
                    <div>
                        <ul className='md:flex justify-around items-center hidden'>
                            <li><button>Home</button></li>
                            <li><button>FAQ</button></li>
                            <li><button>Changelog</button></li>
                            <li><button>Blog</button></li>
                            <li><button>Download</button></li>
                            <li><button>Contact</button></li>
                            <li>
                                <button className='flex items-center gap-3 bg-gradient-to-br from-indigo-800 via-violet-700 to-fuchsia-600 px-4 py-2 rounded-md text-white font-bold ml-2'>
                                    <span>+</span>
                                    <span>New Ticket</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;