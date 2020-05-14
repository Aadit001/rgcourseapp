import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"

import Ourservicessection from "../components/services/Ourservicessection"





const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="SENSE IN TALKS" />
   <HeroSection
   img={data.img.childImageSharp.fluid}
    title="Our Services"
   subtitle=""
   heroclass="about-background"
   />
   
   <Ourservicessection/>
  
 </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}

`

export default ServicesPage
