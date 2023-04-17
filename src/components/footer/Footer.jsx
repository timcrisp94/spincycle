import { Link } from "react-router-dom"
import Collapsible from "react-collapsible"
import { Reoverlay } from "reoverlay"
import MessageModal from "../modals/messageModal/MessageModal"

const Footer = () => {

  const showMessage = () => {
    Reoverlay.showModal(MessageModal, {
      text: "Oops, this page is still under construction!"
    })
  }


  return (
    <div className="w-screen bg-slate-300 h-fit text-slate-900 p-5">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-4 text-lg text-center font-quicksand">

        <Collapsible trigger="About SpinCycle" className="hover:underline">
          <div className="text-xs">
            <p className="hover:underline" onClick={showMessage}>Our Mission and Impact</p>
            <Link to="/a_career_with_us" className="hover:underline text-slate-900 hover:text-blue-900">A Career With Us</Link>
            <p className="hover:underline" onClick={showMessage}>Our Terms</p>
            <p className="hover:underline" onClick={showMessage}>Privacy</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Our Solutions" className="hover:underline">
          <div className="text-xs">
            <p className="hover:underline" onClick={showMessage}>What We Do</p>
            <Link to="/where_we_operate" className="hover:underline text-slate-900 hover:text-blue-900">Where We Operate</Link>
            <p className="hover:underline" onClick={showMessage}>Refer a Friend or Family</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Join Us" className="hover:underline">
          <div className="text-xs">
            <Link to="/a_career_with_us" className="hover:underline text-slate-900 hover:text-blue-900">A Career With Us</Link>
            <br />
            <Link to="/become_a_driver" className="hover:underline text-slate-900 hover:text-blue-900">Become A Driver</Link>
            <br />
            <Link to="/become_a_service_provider" className="hover:underline text-slate-900 hover:text-blue-900">Become A Service Provider</Link>
          </div>
        </Collapsible>

        <Collapsible trigger="FAQ" className="hover:underline">
          <div className="text-xs">
            <Link to="/FAQ" className="hover:underline text-slate-900 hover:text-blue-900">Our FAQ</Link>
            <p className="hover:underline" onClick={showMessage}>Contact Us</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Contact Us" className="hover:underline">
          <div className="text-xs">
            <p className="hover:underline" onClick={showMessage}>FaceBook</p>
            <p className="hover:underline" onClick={showMessage}>Instagram</p>
            <p className="hover:underline" onClick={showMessage}>LinkedIn</p>
            <p className="hover:underline" onClick={showMessage}>Twitter</p>
          </div>
        </Collapsible>

      </div>

    </div>
  )
}

export default Footer