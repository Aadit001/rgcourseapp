import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme ">
        <div className="container">
        <Heading title={heading}/>
        <div className="row">
        <div className="col-8 mx-auto">
        <p className="text-white lead mb-5">
        Lorem ipsum is placeholder text commonly 
        used in the graphic, print, and publishing 
        industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the 
        graphic, print, and publishing industries for previewing 
        layouts and visual mockups.Lorem ipsum is placeholder text commonly 
        used in the graphic, print, and publishing 
        industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the 
        graphic, print, and publishing industries for previewing 
        layouts and visual mockups.Lorem ipsum is placeholder text commonly 
        used in the graphic, print, and publishing 
        industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the 
        graphic, print, and publishing industries for previewing 
        layouts and visual mockups.Lorem ipsum is placeholder text commonly 
        used in the graphic, print, and publishing 
        industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the 
        graphic, print, and publishing industries for previewing 
        layouts and visual mockups.Lorem ipsum is placeholder text commonly 
        used in the graphic, print, and publishing 
        industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the 
        graphic, print, and publishing industries for previewing 
        layouts and visual mockups.
     </p>
        </div>   
        <div className="col-4">
        <div className="card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScR1ggzX4abPHJj1rw7rFRKlQsT6vwiGeqe5NhRhqVKyyqIDyRyEQb50pLzw&s" class="card-img-top" alt="img goes here"/>
  <div className="card-body">
    <h5 className="card-title">just click photos</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <Link  to ="/about" className="btn btn-warning btn-block">{heading}</Link>
  
  </div>
</div>
        
        </div> 
        </div>
    </div>
       </section>
    )
}
