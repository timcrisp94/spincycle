import SmallHeader from "../smallHeader/SmallHeader"
import ThreeColumnsWithPictures from "../threeColumnsWithPictures/ThreeColumnsWithPictures"

const SectionOne = () => {

  return (
    <div className="w-screen grid grid-cols-8 overflow-x-hidden gap-4 bg-slate-200 text-slate-900 py-10">

      <div className="col-span-8 flex flex-col justify-center items-center">
        <h1 className="font-gloock text-5xl font-bold text-center highlight-yellow-200 hover:bg-yellow-200 hover:skew-x-2 hover:skew-y-2 transition duration-700">SpinCycle</h1>
      </div>
      

      <div className="md:col-span-3 col-start-2 col-end-8 py-10 my-auto px-10 sm:px-20 md:px-10 lg:px-20">
        <img className="max-w-80 hover:scale-110 transition duration-700" src="../images/man-in-machine-2.jpg" alt="man in washing machine" />
      </div>

      <div className="md:col-span-2 col-start-2 col-span-6 my-auto font-quicksand text-center xl:text-xl md:text-base sm:px-10 md:px-0 ">
        <p>Don't worry about your laundry. From         wash-and-fold to dry cleaning and everything in-between we've got you covered door-to-door.
        <br />
        <br />
        Our convenient online booking system allows you to schedule your laundry pickup and delivery at your own convenience. Plus, we offer flexible delivery options, including same-day and next-day delivery, so you can have your laundry back when you need it.
        </p>
        <br />

        <p>Coming soon to Boston!</p>
      </div>

      <div className="md:col-span-3 col-start-2 col-end-8 py-10 my-auto px-10 sm:px-20 md:px-10 lg:px-20">
        <img className="max-w-80 hover:scale-110 transition duration-700" src="../images/woman-on-washer.jpg" alt="woman on washing machine" />
      </div>
    </div>
  )
}

export default SectionOne