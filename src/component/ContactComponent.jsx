import React from 'react'
import line from '../assets/line.svg'
import star1 from '../assets/star 1.svg'


const Contact = () => (

        <div>
                
                <div id="contact" className="container">

                    <div className="text-center">
                            <h1 className="text-uppercase">Contact</h1>
                            <img style={{width : "100px",margin : "5px"}} src={line} alt="avatar"/> 
                            <img  style={{width : "50px", margin : "5px"}} src={star1} alt="avatar"/> 
                            <img  style={{width : "100px", margin : "5px"}} src={line} alt="avatar"/>   
                    </div>

                     <div className="d-flex justify-content-center" >

                            <form style={{width : "70%"}} action="#" >
                                <div>
                                    <input className="col" type="text" placeholder="Name" required="required" data-validation-required-message="Plaease enter your name" />
                                    <hr/>
                                </div>

                                <div>
                                    <input className="col"  type="text" placeholder="Email Address" required="required" data-validation-required-message="Plaease enter your email address" />
                                    <hr/>
                                </div>

                                <div>
                                    <input className="col"  type="text" placeholder="Phone Number" required="required" data-validation-required-message="Plaease enter your phone no" />
                                    <hr/>
                                </div>

                                <div>
                                    <textarea className="col"  type="text" placeholder="Message" required="required" data-validation-required-message="Plaease enter a massege" />
                                    <hr/>
                                </div>

                                <div className="form-group">
                                    <button style={{backgroundColor:"#1BCA9B", color : "white", padding : "10px 30px"}} className="btn " type="submit">Send</button>
                                </div>
                            </form>

                     </div>
     
                </div>
    
        </div>
    
)
export default Contact;