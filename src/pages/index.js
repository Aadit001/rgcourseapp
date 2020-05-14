import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import Infoblock from "../components/reuseable/Infoblock"
import Dualinfoblock from "../components/reuseable/Dualinfoblock"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="SENSE IN TALKS" />
   <HeroSection
   img={data.img.childImageSharp.fluid}
    title="i write code"
   subtitle="learncodeonline.in"
   heroclass="hero-background"
   />
   <Infoblock heading="About Us"/>
   <Coursecart courses={data.courses}/>
  
   <Dualinfoblock heading=" Our Team"/>
 </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses{
      edges {
        node {
          id
          price
          title
          categories
          description{
            description
          }
          image{
            fixed(width:200 ,height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          }
        }
      }
}

`

export default IndexPage
