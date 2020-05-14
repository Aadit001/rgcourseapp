import React, { Component } from 'react'
import Heading from "../reuseable/Heading"
import Img from 'gatsby-image'




const getCaty = items =>{
    let holdItems = items.map(items =>{
        return items.node.categories
    })
    let holdCategories = new Set(holdItems)
    let sortedCategories = Array.from(holdCategories)
    sortedCategories =["all", ...sortedCategories]
    return sortedCategories
}

export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories: getCaty(props.courses.edges)

        }
    }

 catyClicked = categories =>{
let keepItsafe = [...this.state.courses]
    
  if (categories === "all") {
     this.setState(()=>{
         return {mycourses:keepItsafe}
     }) 
  }else{
      let holdnew = keepItsafe.filter(({node})=> node.categories === categories)
      this.setState(()=>{
        return {mycourses:holdnew} 
      })
  }
 
 }



    render() {
     //   console.log(this.state.courses);
        return (
            <section className="py-5">
            <div className="container">
            <Heading title="Courses"/>
            <div className= "row my-3">
            <div className="col-10 mx-auto text-center">
            {
              this.state.mycategories.map((categories,index)=>{
                 return (
                <button 
                className="btn btn-info m-3 px-3" 
                type="button" 
                key={index}
                onClick={()=>{
                    this.catyClicked(categories)
                }}>
                {categories}
                </button>

                 )
              })

            }
             </div>
            </div>
            <div className="row">
            { this.state.mycourses.map(({node})=>{
                return(
                    <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                    <Img fixed={node.image.fixed}/>
                    <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                    <h6 className="mb-0">{node.title}</h6>
                    <h6 className="mb-0 text-success ml-3">${node.price}</h6>
                      </div>
                    <p className="text-muted"> 
                    <small>{node.description.description}</small>
                    </p>
                    <button 
                    className="snipcart-add-item btn btn-warning"
                    data-item-id={node.id}
                    data-item-name={node.title}
                    data-item-price={node.price}
                    data-item-url="https://learncodeonline.in"
                    data-item-image={node.image.fixed.src}>
                    Join now</button>
                     </div>
                    </div>
                )

    })
 }
 </div>
            </div>
 </section>
        )
    }
}
