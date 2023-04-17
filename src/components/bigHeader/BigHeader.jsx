import { Link } from "react-router-dom"

const bgOptions = 'bg-cover h-2/3 '

const defaultOptions = 'bg-slate-200/50 backdrop-blur-sm hover:backdrop-blur-none backdrop-hue-rotate-180 hover:hue-rotate-30 backdrop-invert backdrop-contrast-150  p-5'

const BigHeader = ({ 
    background  = 'bg-shallow-depth-cover', 
    backgroundOptions = bgOptions ,
    options = defaultOptions
  }) => {

    return (
      <div className={`${backgroundOptions} ${background}`}>

        <div className="w-fit sm:p-20 p-10">
          <div className={`${options} transition duration-700`}>
            <h1 className="font-gloock sm:text-7xl text-6xl bg-red-200/20 w-[100%] hover:bg-yellow-200 hover:skew-x-3 hover:skew-y-2 transition duration-700">
              <Link to="/" className="text-slate-900 hover:text-slate-900">SpinCycle</Link>
            </h1>
            <div className="pt-3 sm:text-base text-sm font-vollkorn">The Smart way to manage your clothes.</div>
          </div>
        </div>
      </div>
    )
}

export default BigHeader