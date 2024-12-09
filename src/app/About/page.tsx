import React from "react"
import AboutHero from "../../Components/AboutHero"
import AboutSection from "../../Components/AboutSection"
import AboutPopularProduct from "../../Components/Aboutpopularproduct"

const Page: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <AboutPopularProduct />
    </div>
  )
}

export default Page
