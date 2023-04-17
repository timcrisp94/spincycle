import Footer from "../../components/footer/Footer"
import SmallHeader from "../../components/smallHeader/SmallHeader"
import BigHeader from "../../components/bigHeader/BigHeader"
const BecomeAServiceProvider = () => { 

  const headerOptions = 'bg-blue-200/50 backdrop-blur-sm hover:backdrop-blur-lg backdrop-hue-rotate-180 hover:hue-rotate-30 backdrop-contrast-150 p-5'

  const backgroundOptions = 'bg-cover h-1/3 bg-top'

  return (
    <div className="flex flex-col h-screen w-screen text-slate-900 bg-slate-200 overflow-x-hidden font-quicksand">

      <BigHeader 
        background="bg-sky-over-machines" 
        backgroundOptions={backgroundOptions}
        options={headerOptions} 
      />

      {/* BECOME A SERVICE PROVIDER */}
      <div className="mb-auto text-center">
        <div className="text-3xl pt-20 pb-10">Become a Service Provider</div>
        <div className="w-fit mx-auto">
          <p className="text-xl p-5">
            Why Work With <span className="font-gloock">SpinCycle</span>?
          </p>
          <div className="text-left mx-10 sm:mx-20 text-sm sm:text-base">
            <li> We help you reach new customers </li>
            <li> We help you get the most out of your current customers </li>
            <li> We take the hassle out of delivery </li>
            <li> You have control over your business through
              <ul className="ml-10">
                <li> Analytics </li>
                <li> Customer feedback and interactions </li>
                <li> Projections </li>
                <li> Industry best practices </li>
              </ul>
            </li>
            <li> Simple Pricing</li>
          </div>
        </div>

        <br />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdESPixtEfyQfey_zCxgY9ZSwODb6W6DqPOu-keQKn78pvsIQ/viewform?usp=share_link" target="_blank">Click Here to Begin!</a>
        
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}

export default BecomeAServiceProvider