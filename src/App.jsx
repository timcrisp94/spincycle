import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { ModalContainer } from 'reoverlay'

import NavBar from './components/navBar/NavBar'
import Landing from "./Pages/landing/Landing"
import FAQ from './Pages/FAQ/FAQ'
import WhereWeOperate from './Pages/whereWeOperate/WhereWeOperate'
import ACareerWithUs from './Pages/aCareerWithUs/ACareerWithUs'
import BecomeADriver from './Pages/becomeADriver/BecomeADriver'
import BecomeAServiceProvider from './Pages/becomeAServiceProvider/BecomeAServiceProvider'

function App() {

  return (
    <>
      <NavBar />
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/where_we_operate" element={<WhereWeOperate />} />
        <Route path="/a_career_with_us" element={<ACareerWithUs />} />
        <Route path="/become_a_driver" element={<BecomeADriver />} />
        <Route path="/become_a_service_provider" element={<BecomeAServiceProvider />} />
      </Routes>
      <ModalContainer />
      {/* <Landing /> */}
    </>
  )
}

export default App
