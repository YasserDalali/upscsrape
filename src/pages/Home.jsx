import Faq from "../components/landing/Faq"

import Hero from "../components/landing/Hero"
/* import Pricing from "../components/landing/Pricing"
 */import Reviews from "../components/landing/Reviews"
import Stats from "../components/landing/Stats"
import Steps from "../components/landing/Steps"
import NavBar from "../components/layout/NavBar"

function Home() {
  return (
    <div className="bg-neutral-900 bg-[url('../../../public/bg.svg')] bg-contain bg-repeat bg-opacity-95
    ">
        <NavBar />
        <Hero />
        <Stats  />
        <Steps />
        {/* <Pricing /> */}
        <Faq/>
        <Reviews />



    </div>
  )
}

export default Home