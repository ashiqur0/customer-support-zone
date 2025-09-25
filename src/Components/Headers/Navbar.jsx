import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='flex justify-start mt-4'>
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
                        <button className='flex items-center gap-2 bg-gradient-to-br from-indigo-800 via-violet-700 to-fuchsia-600 px-4 py-2 rounded-md'>
                            <span>+</span>
                            <span>New Ticket</span>
                        </button>
                    </li>
                </ul>
            </details>

            <div className='w-full flex justify-between items-center'>
                <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
                <div>
                    <ul className='md:flex justify-around gap-4 items-center hidden'>
                        <li>Home</li>
                        <li>FAQ</li>
                        <li>Changelog</li>
                        <li>Blog</li>
                        <li>Download</li>
                        <li>Contact</li>
                        <li>
                            <button className='flex items-center gap-2 bg-gradient-to-br from-indigo-800 via-violet-700 to-fuchsia-600 px-4 py-2 rounded-md'>
                                <span>+</span>
                                <span>New Ticket</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;