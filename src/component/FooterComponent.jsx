import React from 'react'


const FooterPage = () => (

      <div>
          <div className="bg-dark text-white">
            <div className="container p-5">
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center er">
                        <h4 className="text-uppercase">Location</h4>
                        <p className="lead">2215 John Daniel Drive Clark, MO 65243</p>
                    </div>

                    <div className="col-md-4 text-center er">
                        <h4 className="text-uppercase">AROUND THE WEB</h4>
                        <div className="row justify-content-center">
                            <i className="fa fa-facebook-square fa-2x col-2 " aria-hidden="true"></i>
                            <i className="fa fa-twitter-square fa-2x col-2" aria-hidden="true"></i>
                            <i className="fa fa-linkedin-square fa-2x col-2" aria-hidden="true"></i>
                            <i className="fa fa-instagram fa-2x col-2" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className="col-md-4 text-center er">
                        <h4 className="text-uppercase">ABOUT FREELANCER</h4>
                        <p className="lead">Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</p>
                    </div>

                </div>
            </div>
        </div>
                    <div style={{backgroundColor: "#2C3335"}}className="text-white d-flex justify-content-center p-2">
                            Copyright © Your Website 2020
                    </div>
      </div>
    
)
export default FooterPage;