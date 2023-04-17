import Footer from "../../components/footer/Footer"
import SmallHeader from "../../components/smallHeader/SmallHeader"
import ThreeColumnsWithPictures from "../../components/threeColumnsWithPictures/ThreeColumnsWithPictures"

const WhereWeOperate = () => {

  return(
    <div className="flex flex-col h-screen w-screen text-slate-900 bg-slate-200 overflow-x-hidden pt-10">

      <SmallHeader />

      <ThreeColumnsWithPictures 
        picture1={{pic: '../images/machine-on-grass.jpg', alt: 'machine on grass'}} 
        picture2={{pic: '../images/machine-by-ocean.jpg', alt: 'machine by ocean'}}
        breakpoint='lg:grid-cols-3'
      >

        <div className="font-quicksand">
          <p className="text-2xl lg:text-3xl mb-5">
            WHERE WE OPERATE
          </p>
          <ul>
            <li className="text-lg lg:text-xl">Massachusetts:</li>
            <ul>
              <li className="text-sm lg:text-base">Boston</li>
              <li className="text-sm lg:text-base">Somerville</li>
              <li className="text-sm lg:text-base">Chelsea</li>
              <li className="text-sm lg:text-base">Everett</li>
              <li className="text-sm lg:text-base">Malden</li>
              <li className="text-sm lg:text-base">Medford</li>
              <li className="text-sm lg:text-base">Revere</li>
              <li className="text-sm lg:text-base">Cambridge</li>
            </ul>
          </ul>
        </div>

      </ThreeColumnsWithPictures>
      
      <Footer />
    </div>
  )
}

export default WhereWeOperate