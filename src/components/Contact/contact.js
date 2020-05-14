import React from 'react'
import Heading from '../reuseable/Heading'

export default function Contact() {
    return (
        <section className="py-3">
        <Heading title="Contact Us"/>
        <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/tiwariaditya438@gmail.com" method="POST">
        <div className="form-group">
        <input type="text" name="name" id="name" placeholder="Enter your name" className="form-control"></input>
        </div>
        <div className="form-group">
        <input type="email" name="email" id="email" placeholder="Enter your email" className="form-control"></input>
        </div>
        <div className="form-group">
        <input type="number" name="mobile" id="mobile" placeholder="Enter your mobile number" className="form-control"></input>
        </div>
        <div className="form-group">
        <textarea type="text" name="description" id="description" placeholder="Enter your message" className="form-control"></textarea>
        </div>
        <button  type="submit "className="btn btn-outline-info btn-block">Send</button>
        
        </form>
        </div>
       </section>
    )
}
