import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import Infoblock from "../components/reuseable/Infoblock"
import Contact from "../components/Contact/contact"


const ContactPage = ({data}) => (
  <Layout>
    <SEO title="SENSE IN TALKS" />
   <HeroSection
   img={data.img.childImageSharp.fluid}
    title="Contact Us"
   subtitle=""
   heroclass="about-background"
   />
  <Infoblock heading="How can we help?"/>
  <Contact/>
  
  
 </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}

`

export default ContactPage
