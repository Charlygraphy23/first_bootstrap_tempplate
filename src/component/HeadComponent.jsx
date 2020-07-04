import React from 'react'
import boy from '../assets/boy.svg'
import minus from '../assets/minus.svg'
import star from '../assets/star.svg'

const HeadPage = () => (
   <div>       
        <div style={{backgroundColor: '#1BCA9B'}}>
            <div className="container text-center" style={{paddingTop : "60px",paddingBottom: " 100px"}}>
                <img className="rounded-circle p-4" style={{width : "250px"}} src={boy} alt="avatar"/>
                <h1 className="text-white text-uppercase">Start Bootstap</h1>
                <img  style={{width : "100px", margin : "5px"}} src={minus} alt="avatar"/> 
                <img  style={{width : "50px", margin : "5px"}} src={star} alt="avatar"/> 
                <img  style={{width : "100px", margin : "5px"}} src={minus} alt="avatar"/>   
                <h4 className="text-white">Graphic Artist - Web Designer - Illustrator</h4>
            </div>
        </div>
   </div>
)
export default HeadPage;