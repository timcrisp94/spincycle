import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useRef, useState } from "react"

import BigHeader from "../../components/bigHeader/BigHeader"

const FAQ = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="flex flex-col bg-slate-200 overflow-x-hidden  w-screen h-screen text-slate-900">

      <div className="font-gloock bg-yellow-machines bg-top bg-cover py-10 pl-5 ">
        <div className="mt-10 h-fit w-fit md:w-2/3 p-3 pr-20 backdrop-hue-rotate-180 backdrop-saturate-200 backdrop-contrast-100 hover:backdrop-hue-rotate-45 hover:backdrop-contrast-150 transition duration-700 overflow-y-hidden">
          <div className="py-10 w-fit sm:p-5 pr-20 bg-yellow-200/30 hover:bg-red-200/30">
            <div className="hover:skew-x-2 hover:skew-y-2 transition duration-700 text-center ">
              <Link to="/" className="text-6xl sm:text-9xl text-inherit hover:text-slate-900 hover:bg-yellow-200/70 transition duration-700">SpinCycle</Link>
            </div>
            <div className="font-vollkorn sm:text-xl text-sm text-left pt-5">The smart way to manage your clothes.</div>
          </div>
        </div>
      </div>

      {/* <BigHeader background={'bg-yellow-machines'} options={'backdrop-hue-rotate-180 backdrop-saturate-200 backdrop-contrast-100 hover:backdrop-hue-rotate-45 hover:backdrop-contrast-150'} /> */}


      <div className="bg-slate-200 w-full lg:w-2/3 mx-auto mt-10 mb-auto">
        <div className="px-10 text-center font-quicksand">

          <p className="text-3xl ">Frequently Asked Questions</p>
          <br />

          <div ref={sliderRef} className="keen-slider h-fit mt-10">

            {/* WHO CLEANS MY CLOTHES */}
            <div className="keen-slider__slide">
              <div className="text-xl">Who cleans my clothes?</div>
              <div className="m-10">
              Great news! You decide yourself. We partner with a number of service providers who are dedicated to bringing you the best quality service. What that means is that you have the option to pick the best business that fits your needs.
              </div>
            </div>

            {/* HOW DO I SCHEDULE MY FIRST ORDER */}
            <div className="keen-slider__slide">
              <div className="text-xl">How do I schedule my first order?</div>  
              <div className="m-10">You can schedule your first order right from our website.</div>
            </div>

            {/* WHAT HAPPENS AFTER I SCHEDULE MY DELIVERY ORDER */}
            <div className="keen-slider__slide">
              <div className="text-xl">What happens after I schedule my delivery order?</div>
              <div className="m-10">We notify you when we pick up your order, when the service provider receives your order, and when your order is ready and on the way to you.</div>
            </div>

            {/* WHAT HAPPENS AFTER I SCHEDULE MY PICKUP ORDER */}
            <div className="keen-slider__slide">
              <div className="text-xl">What happens after I schedule my pick-up order?</div>
              <div className="m-10">We notify the service provider of your order and you reserve your spot. All you have to do is to bring your clothes to them.</div>
            </div>

            {/* HOW SOON CAN I GET MY CLOTHES */}
            <div className="keen-slider__slide">
              <div className="text-xl">How soon can I get my clothes?</div>
              <div className="m-10">That depends on the business you choose. Some providers have same day service while others take a bit longer. Rest assured, when they are done, we will be on our way to drop off your clothes immediately.</div>
            </div>

            {/* WHAT IF I’M NOT HOME */}
            <div className="keen-slider__slide">
              <div className="text-xl">What if I’m not home?</div>
              <div className="m-10">We are dedicated to working around your schedule. We typically follow your preferred pickup and delivery times, and we provide you updates on our progress. If for any reason you’re not home when we're scheduled to pick up or drop off your clothes, you can leave a special instruction, or extend your timeframe. We understand. </div>
            </div>

          </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              className="h-4"
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              className=""
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}

        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>

    </div>
  )
}

function Arrow(props) {
  return (
    <svg
      onClick={props.onClick}
      className={` ${
        props.left ? "h-3 left-0 sm:bottom-[9rem] bottom-[13rem] relative hover:cursor-help" : "h-3 relative -right-[98%]  sm:bottom-[9.75rem] bottom-[13.75rem] hover:cursor-help"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}


export default FAQ