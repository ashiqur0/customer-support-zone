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

  function handleSetIssues(issue) {
    if (issues.find(issueF => issue.id === issueF.id)) {
      return toast("Issue is already added");
    }
    const newIssue = [...issues, issue];
    setIssues(newIssue);
    // console.log(issues);
    // toast("Wow so easy!")
  }

  return (
    <div className='font-inter bg-gray-200'>
      <Navbar></Navbar>
      <Banner issues={issues}> </Banner>
      <Suspense fallback={
        <div className='w-320 mx-auto flex justify-center items-center'>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        <CustomerTicketParent
          customerPromise={customerPromise}
          handleSetIssues={handleSetIssues}
          issues={issues}
        > </CustomerTicketParent>
      </Suspense>

      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
