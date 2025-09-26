import './App.css'
import Banner from './Components/Headers/Banner'
import Navbar from './Components/Headers/Navbar'
import CustomerTicketParent from './Components/Main/CustomerTicketParent'

function App() {

  return (
    <div className='font-inter bg-gray-200'>
      <Navbar></Navbar>
      <Banner></Banner>
      <CustomerTicketParent></CustomerTicketParent>
    </div>
  )
}

export default App
