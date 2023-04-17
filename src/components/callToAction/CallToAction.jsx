import { Link } from "react-router-dom"
const CallToAction = () => {

  return (
    <div className="py-10 bg-slate-200 md:text-lg lg:text-2xl text-slate-900 text-center font-quicksand grid grid-cols-4 ">
      <div className="w-2/3 md:col-span-2 col-span-4 mx-auto my-auto">

        <h1 className="text-3xl lg:text-5xl">We're hiring!</h1>
        <br />
        Are you or somone you know looking to make some extra cash? <br />
        <br />
        SpinCycle is hiring Drivers and Service Providers now. <br />
        <br />
        Join today!<br />
        <br />

        <div className="flex-col">

          <div className="flex-1 my-1">
            <Link to="/a_career_with_us" className="text-slate-900 hover:text-blue-900">A Career With Us</Link>
          </div>

          <div className="flex-1 my-1">
            <Link to="/become_a_driver" className="text-slate-900 hover:text-blue-900">Become A Driver</Link>
          </div>

          <div className="flex-1 my-1">
            <Link to="/become_a_service_provider" className="text-slate-900 hover:text-blue-900">Become A Service Provider</Link>
          </div>

        </div>

      </div>

      <div className="md:col-span-2 col-span-4 mx-10 md:my-auto mt-10 ">
        <img 
          src="../images/laundromat-pastel.png" 
          alt="Laundromat pastel painting done by Dall-E" 
          className="hover:scale-110 transition duration-700"
        />
      </div>
    </div>
  )
}

export default CallToAction