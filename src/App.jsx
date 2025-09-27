import { Suspense } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Headers/Banner'
import Navbar from './Components/Headers/Navbar'
import CustomerTicketParent from './Components/Main/CustomerTicketParent'

const fetchCustomers = async () => {
  const res = await fetch('../public/customer.json');
  return res.json();
}

const customerPromise = fetchCustomers();

function App() {

  return (
    <div className='font-inter bg-gray-200'>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={
        <div className='w-320 mx-auto flex justify-center items-center'>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        <CustomerTicketParent
          customerPromise={customerPromise}
        >
        </CustomerTicketParent>
      </Suspense>

      <Footer></Footer>
    </div>
  )
}

export default App
