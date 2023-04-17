import Footer from "../../components/footer/Footer"
import SmallHeader from "../../components/smallHeader/SmallHeader"
import ThreeColumnsWithPictures from "../../components/threeColumnsWithPictures/ThreeColumnsWithPictures"

const BecomeADriver = () => { 

  return (
    <div className="flex flex-col h-screen w-screen text-slate-900 bg-slate-200 overflow-x-hidden pt-10">

      <SmallHeader />

      <ThreeColumnsWithPictures 
        picture1={{pic: '../images/suv-desert.jpg', alt: 'suv in desert'}} 
        picture2={{pic: '../images/suv-dark.jpg', alt: 'suv at sunset'}}
        breakpoint='lg:grid-cols-3'
      >

        <div>
          {/* BECOME A DRIVER */}
          <p className="text-4xl lg:text-5xl mb-5">
            Become a Driver
          </p>

          {/* WHY DRIVE WITH SPINCYCLE */}
          <p className="text-lg lg:text-xl">Why drive with <span className="font-gloock">SpinCycle?</span> </p>
          <div className="text-sm lg:text-base mx-5">
            <p className="py-2">You’re working with local businesses to help them better help their communities</p>
            <p className="py-2">Our schedule revolves around your time, not the other way around</p>
            <p className="py-2">We have an extensive support network to help you if and when you need it</p>
          </div>

          {/* WHAT'S IN IT FOR YOU */}
          <p className="text-lg lg:text-xl mt-10">What's in it for you?</p>            
          <div className="text-sm lg:text-base mx-5">
            <p className="py-2">Base pay per order - no order is too small, your money is yours to keep</p>
            <p className="py-2">Your tips - belong to you, we are completely transparent and we will never take a share of the money you worked for</p>
            <p className="py-2">Bonus - lots of chances to earn on all the work you put in</p>
          </div>

          {/* HOW DO I JOIN */}
          <p className="text-lg lg:text-xl mt-10">How do I join?</p>            
          <div className="text-sm lg:text-base mx-5">
            <p className="py-2">Are you at least 18 and older?</p>
            <p className="py-2">Do you have a car or motorcycle?</p>
            <p className="py-2">Can you pass a background check</p>

            <p className="py-2">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1Dvqtau3sof3QAY5EZXs1zhtdx9svgJR-5xC9JMbRap-rcg/viewform?usp=share_link" target="_blank">Click Here to Begin!</a>
            </p>
          </div>
        </div>


      </ThreeColumnsWithPictures>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}

export default BecomeADriver