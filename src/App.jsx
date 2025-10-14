import { Suspense } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Headers/Banner'
import Navbar from './Components/Headers/Navbar'
import CustomerTicketParent from './Components/Main/CustomerTicketParent'
import { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';

const fetchCustomers = async () => {
  const res = await fetch('./customer.json');
  return res.json();
}
const customerPromise = fetchCustomers();

function App() {

  const [issues, setIssues] = useState([]);
  const [resolved, setResolved] = useState([]);

  function handleSetIssues(issue) {
    if (issues.find(issueF => issue.id === issueF.id)) {
      return toast.warn('Issue is already added', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }

    const newIssue = [...issues, issue];
    setIssues(newIssue);
    toast.info('Added In Progress!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  function handleSetResolved(issue) {
    const newResolved = [...resolved, issue];
    setResolved(newResolved);

    const oldIssue = issues.filter(issueF => issueF.id !== issue.id);
    setIssues(oldIssue);
    toast.success('Issue Solved');
  }

  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const props = { customerPromise, handleSetIssues, issues, handleSetResolved, resolved, isDarkMode };

  return (
    <div className={`font-inter ${isDarkMode ? 'bg-slate-900' : 'bg-slate-200'}`}>

      <Navbar isDarkMode={isDarkMode}></Navbar>
      <Banner props={props}> </Banner>

      <Suspense fallback={
        <div className='w-320 mx-auto flex justify-center items-center'>
          <span className="loading loading-spinner loading-xl"></span>
        </div>}>
        <CustomerTicketParent props={props} > </CustomerTicketParent>
      </Suspense>

      <Footer></Footer>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  )
}

export default App
