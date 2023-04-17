import { Link } from "react-router-dom"

const SmallHeader = () => {
  return (
    <>
      <div className="pt-10 text-center">
        <h1 className="font-gloock text-6xl hover:skew-y-2 hover:skew-x-2 transition duration-700">
          <Link className="text-slate-900 hover:text-slate-900 hover:bg-yellow-200 " to="/">SpinCycle</Link>
        </h1>
        <p className="font-vollkorn mt-3">The smart way to manage your clothes.</p>
      </div>
    </>
  )
}

export default SmallHeader