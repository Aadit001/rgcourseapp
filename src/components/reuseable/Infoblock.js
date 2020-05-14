import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (    
        <section className="bg-theme my-5 py-4">
           <div className="container">
           <Heading title={heading}/>
           <div className="row">
           <div className="col-10 col-sm-8 mx-auto text-center">
           <p className="lead text-white mb-4">
           Lorem ipsum dolor sit amet. It is a latin phrase that 
           deals with the idea of pleasure versus pain. Losely 
           translated it means: "Neither is there anyone who loves, 
           pursues or desires pain itself because it is pain" It makes
            more sense to me in French though.
          </p>
          <Link to="/about/">
          <button className="btn btn-warning btn-lg ">{heading}
          </button>
          </Link>
           </div>
           </div>
           </div> 
        </section>
    )
}
