import About from "./About"
import Banner from "./Banner"
import CSR from "./CSR"
import Process from "./Process"
import Trust from "./Trust"
// import VisionMission from "./VissionMission"
import WhyRaajvita from "./WhyRaajvita"


function Home() {
  return (
   <>
   <Banner/>
   <Trust/>
   <About/>
   {/* <VisionMission/> */}
   <CSR/>
   <Process/>
   <WhyRaajvita/>
   </>
  )
}

export default Home