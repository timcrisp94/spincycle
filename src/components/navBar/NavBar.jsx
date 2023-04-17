import { Link } from "react-router-dom"
import { Reoverlay } from "reoverlay"
import MessageModal from "../modals/messageModal/MessageModal"

const NavBar = () => {

  const showMessage = () => {
    Reoverlay.showModal(MessageModal, {
      text: "Oops, this page is still under construction!"
    })
  }

  const linkStyle = "text-slate-900 px-2 hover:text-slate-900 hover:bg-yellow-200/60 transition duration-700"

  return(
    <div className="fixed top-0 w-screen bg-slate-200/80 drop-shadow-sm backdrop-blur-md h-[4vh] flex text-slate-900 font-quicksand z-10 overflow-x-hidden backdrop-hue-rotate-90">

      <div className="my-auto pl-5 sm:pl-10 font-gloock flex-1">
        <Link 
          to='/'
          className={linkStyle}
        >
          SpinCycle
        </Link>
      </div>

      <div 
        className="my-auto flex-1 hover:cursor-pointer"
        onClick={showMessage}
      >
        <Link
          to='/'
          className={linkStyle}
        >
          About
        </Link>
      </div>

      <div className="my-auto flex-1 hover:cursor-pointer">
        <Link 
          to='/a_career_with_us'
          className={linkStyle}
        >
          Careers
        </Link>
      </div>

      <div 
        className="my-auto pr-5 sm:pr-14 hover:cursor-pointer"
        onClick={showMessage}
      >
        <Link
          to='/'
          className={linkStyle}
        >
          Contact
        </Link>
      </div>

    </div>
  )
}

export default NavBar