import { Suspense } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Headers/Banner'
import Navbar from './Components/Headers/Navbar'
import CustomerTicketParent from './Components/Main/CustomerTicketParent'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const fetchCustomers = async () => {
  const res = await fetch('../public/customer.json');
  return res.json();
}

const customerPromise = fetchCustomers();

function App() {

  const [issues, setIssues] = useState([]);
  const [resolved, setResolved] = useState([]);

  function handleSetIssues(issue) {
    if (issues.find(issueF => issue.id === issueF.id)) {
      return toast("Issue is already added");
    }
    const newIssue = [...issues, issue];
    setIssues(newIssue);
  }

  function handleSetResolved(issue) {
    const newResolved = [...resolved, issue];
    setResolved(newResolved);

    const oldIssue = issues.filter(issueF => issueF.id !== issue.id);
    setIssues(oldIssue);
  }

  return (
    <div className='font-inter bg-gray-200'>
      <Navbar></Navbar>
      <Banner
        issues={issues}
        resolved={resolved}
      > </Banner>
      <Suspense fallback={
        <div className='w-320 mx-auto flex justify-center items-center'>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        <CustomerTicketParent
          customerPromise={customerPromise}
          handleSetIssues={handleSetIssues}
          issues={issues}
          handleSetResolved={handleSetResolved}
          resolved={resolved}
        > </CustomerTicketParent>
      </Suspense>

      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
