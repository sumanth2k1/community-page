import './App.css'
import { useLocation,Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home }  from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Maintainance } from './components/Maintainance/Maintainance';
import HomeFooter from './components/Footer/HomeFooter';
import OnlineServices from './components/OnlineServices/OnlineServices';
import LiveDarshan from './components/LiveDarshan/LiveDarshan';
import SocialActivity from './components/SocialServices/SocialActivity';


function App() {
  const location = useLocation();
  console.log(location)

  return (
    <>
    <div className='m-0 h-0 md:m-4 md:h-4 justify-center align-middle'>
      SHREE SHANESHWARA CHAMUNDESHWARI AYYAPPA BHAKTA VRINDA FOUNDATION
    </div>
    <Navbar />
    <Routes location={location} key={location.pathname}>
      <Route path='/' index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/maintainance' element={<Maintainance />} />
      <Route path='/onlineservices' element={<OnlineServices />} />
      <Route path='/liveDarshan' element={<LiveDarshan />} />
      <Route path='/socialactivity' element={<SocialActivity />} />
    </Routes>
    <div className="">
    <HomeFooter/>
    </div>
    </>
  )
}

export default App
