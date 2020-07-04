import React from 'react'
import minus from '../assets/minus.svg'
import star from '../assets/star.svg'


const About = () => (

    <div id="about">  
            <div className="jumbotron text-center" style={{backgroundColor: '#1BCA9B', marginTop : "120px"}}>
                <div className="container">
                    <h1 className="text-white text-uppercase">About</h1>
                    <img  style={{width : "100px", margin : "5px"}} src={minus} alt="avatar"/> 
                    <img  style={{width : "50px", margin : "5px"}} src={star} alt="avatar"/> 
                    <img  style={{width : "100px", margin : "5px"}} src={minus} alt="avatar"/>     
                

                    <div className="row d-flex justify-content-center text-white">
                        <div className="col-md-4">
                            <p className="lead text-left">Freelancer is a free bootstrap theme created by Start Bootstrap. 
                            The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>

                        <div className="col-md-4">
                            <p className="lead text-left"> You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
 
                    </div>

                    <div>
                        <button className=" btn_download">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-arrow-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                </svg> Download
                        </button>
                    </div>

                </div> 
            </div>
    </div>
)
export default About;