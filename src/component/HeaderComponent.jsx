import React from 'react'


const HeaderPage = () => (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top text-uppercase">
                <div className="container">
                    <a className="navbar-brand text-white active" href="#"><h4>Start Bootstrap</h4></a>

                    <button className="navbar-toggler font-weight-bold" data-toggle="collapse" data-target="#navmenu">

                        <svg  width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-hdd-stack-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                        </svg>
                    </button>
                
                    <div className="collapse navbar-collapse justify-content-end" id="navmenu" >
                            
                                <ul className="navbar-nav nav-pills  green">
                                    <li className="nav-item"><a className="nav-link"  href="#portfolio"><h5>Portfolio</h5></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#about"><h5 className="navNmae">About</h5></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#contact"><h5 className="navNmae">Contact</h5></a></li>
                                </ul>
                    </div>
                
                </div>

            </nav>

)
export default HeaderPage;