import React from 'react'
import line from '../assets/line.svg'
import star1 from '../assets/star 1.svg'

const ModalPage = ({image}) =>(
    <div  className="modal fade" id="mypicDescriptionPage" >
        <div className="modal-dialog modal-dialog-centered modal-xl "role="document">
            <div className="modal-content" style={{borderRadius : "20px"}}>

                    <div className="d-flex justify-content-end p-2"> 
                        <button className="clos" data-dismiss="modal">
                            <i className="fa fa-times fa-3x" aria-hidden="true"></i>

                        </button>
                    </div>

                <div className="modal-body">              

                   <div className="container text-center">
                        <div className="row justify-content-center">
                                <div>
                                    <h1 className="text-uppercase">Log Cabin</h1>
                                    <img style={{width : "100px",margin : "5px"}} src={line} alt="avatar"/> 
                                    <img  style={{width : "50px", margin : "5px"}} src={star1} alt="avatar"/> 
                                    <img  style={{width : "100px", margin : "5px"}} src={line} alt="avatar"/>   
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                    <img style={{width : "80%",borderRadius : "10px", margin: "30px" }} src={image} alt="image"/>
                            </div>

                            <div className="row justify-content-center">
                                <div className="container " style={{width : "70%"}}>
                                    <p className="text-center" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                </div>
                            </div>
                        </div>
                   </div>

                <div className="text-center " style={{paddingBottom: "70px" ,marginTop : "20px"}}>
                    <button className="btn" style={{backgroundColor : "#1BCA9B", color : "white"}} data-dismiss="modal">
                       <i className="fa fa-times" aria-hidden="true"></i>   Close Window </button>
                </div>
            </div>
        </div>
    </div>
)
export default ModalPage;