import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import Infoblock from "../components/reuseable/Infoblock"
import Dualinfoblock from "../components/reuseable/Dualinfoblock"
import Teamphotosection from "../components/about/Teamphotosection"




const AboutPage = ({data}) => (
  <Layout>
    <SEO title="SENSE IN TALKS" />
   <HeroSection
   img={data.img.childImageSharp.fluid}
    title="About learncodeonline"
   subtitle=""
   heroclass="about-background"
   />
   <Dualinfoblock heading="Message from CEO"/>
   <Infoblock heading="About Vision"/>
   <Teamphotosection heading="Our Team "/>
  
 </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}

`

export default AboutPage
