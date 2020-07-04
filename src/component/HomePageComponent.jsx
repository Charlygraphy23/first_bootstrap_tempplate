import React from 'react'
import './Style.css'
import HeaderPage from './HeaderComponent.jsx'
import HeadPage from './HeadComponent.jsx'
import Portfolio from './PortfolioComponent.jsx'
import About from './AboutComponent.jsx'
import Contact from './ContactComponent.jsx'
import FooterPage from './FooterComponent.jsx'

const HomePage = () => (

      <div style={{position: "relative"}}>
            
            <HeaderPage />   

            <div>
                        
                <HeadPage />          
                <Portfolio />                
                <About /> 
                <Contact/>
                <FooterPage />
            </div> 

        </div>
    
)
export default HomePage;