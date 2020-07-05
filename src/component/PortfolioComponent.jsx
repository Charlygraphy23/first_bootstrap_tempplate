import React,{ useState } from 'react'
import line from '../assets/line.svg'
import star1 from '../assets/star 1.svg'
import ModalPage from "./ModalComponet.jsx"




const Portfolio = () => {

        const  img_1 = "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/104332094_2593032974133572_6086607186117059351_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=LR4pv67G-gAAX-6Y8L_&oh=daa3a89b49419a96d335a8ac471bdb6d&oe=5F29DBAC";
        const  img_2 = "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/57104321_466386837431692_4785095045277432637_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=frztQIsCHakAX9qo33S&oh=768a0abfc6a5936698b1eeac03278a89&oe=5F2CE761";
        const  img_3 = "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/90792537_2716608435226914_7973585753014943246_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=LYZTEDNAOfcAX9tWS4-&oh=cec9258ed250270519ad85ada602a0af&oe=5F2CC6E9";
        const  img_4 = "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/55935298_323694758332594_4700055600710223156_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=qHzLvNajTr0AX_vdDlJ&oh=44c4fa38cdb9fad4800a14a3a559a11b&oe=5F2C3A58";
        const  img_5 = "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/84026012_796792620811891_564985361124267143_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=sFoC802FPscAX_TGJK6&oh=c7144aa8d56b6d5179989246a6533b76&oe=5F2B3558"
        const  img_6 = "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/73184570_178502986660816_2770476422638067194_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=1SDOlpWU5l0AX93rUa8&oh=e0837933ebe052022cd5770f7c29786a&oe=5F2AAEE1"


        const [images , setImages] = useState({
                e_Image : {},               
        });

        const handleClick = (id) =>
        {
               
               if(id === '1'){
                   setImages({e_Image : img_1})
               }
               else if(id === '2'){
                setImages({e_Image : img_2})
                 }
                else if(id === '3'){
                        setImages({e_Image : img_3})
                    }
                else if(id === '4'){
                     setImages({e_Image : img_4})
                      }

                else if(id === '5'){
                        setImages({e_Image : img_5})
                    }
                else if(id === '6'){
                     setImages({e_Image : img_6})
                      }

            
              
        }
        console.log(images.e_Image)
    return(
    <div id="portfolio" style={{paddingTop : " 100px"}}> 
        <div  className="container text-center">

            <div>
            <h1 className="text-uppercase">Portfolio</h1>
            <img style={{width : "100px",margin : "5px"}} src={line} alt="avatar"/> 
            <img  style={{width : "50px", margin : "5px"}} src={star1} alt="avatar"/> 
            <img  style={{width : "100px", margin : "5px"}} src={line} alt="avatar"/>   
            </div>

            <div className="row justify-content-center">
                <div className="col-md-4 d-flex justify-content-center">   
                        <div style={{position : "relative" ,width : "300px",height : "200px", marginBottom : "10px"}}>
                                <img className="ee" style={{width : "100%" ,height : "100%",borderRadius : '10px'}} src={img_1} alt="image3"/>
                        </div>    

                        <div className="centered">
                                        <button onClick={() => handleClick('1')}   className="centered_btn" data-toggle="modal" data-target="#mypicDescriptionPage" >
                                             <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
                                       </button> 
                                    </div>                    
                </div>

                <div className="col-md-4  d-flex justify-content-center">   
                        <div style={{position : "relative" ,width : "300px",height : "200px" , marginBottom : "10px"}}>
                                <img style={{width : "100%" ,height : "100%",borderRadius : '10px'}} src={img_2} alt="image4"/>
                        </div>    

                        <div className="centered">
                                        <button  onClick={() => handleClick('2')}  className="centered_btn" data-toggle="modal" data-target="#mypicDescriptionPage" >
                                             <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
                                       </button> 
                                         
                         </div>                    
                </div>

                <div className="col-md-4 d-flex justify-content-center">   
                        <div style={{position : "relative" ,width : "300px",height : "200px" , marginBottom : "10px"}}>
                                <img style={{width : "100%" ,height : "100%",borderRadius : '10px'}} src={img_3} alt="image5"/>
                        </div>    

                        <div className="centered">
                                        <button onClick={() => handleClick('3')} className="centered_btn" data-toggle="modal" data-target="#mypicDescriptionPage" >
                                             <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
                                       </button> 

                         </div>                    
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 d-flex justify-content-center">   
                        <div style={{position : "relative" ,width : "300px",height : "200px" , marginBottom : "10px"}}>
                                <img style={{width : "100%" ,height : "100%",borderRadius : '10px'}} src={img_4} alt="image6"/>
                        </div>  

                        <div className="centered">
                                        <button onClick={() => handleClick('4')} className="centered_btn" data-toggle="modal" data-target="#mypicDescriptionPage" >
                                             <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
                                       </button> 
                        </div>                      
                </div>

                <div className="col-md-4 d-flex justify-content-center">   
                        <div style={{position : "relative" ,width : "300px",height : "200px" , marginBottom : "10px"}}>
                                <img style={{width : "100%" ,height : "100%",borderRadius : '10px'}} src={img_5} alt="image7"/>
                        </div>         

                        <div className="centered">
                                        <button onClick={() => handleClick('5')} className="centered_btn" data-toggle="modal" data-target="#mypicDescriptionPage" >
                                             <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
                                       </button> 

                            </div>               
                </div>

                <div className="col-md-4 d-flex justify-content-center">   
                        <div style={{position : "relative" ,width : "300px",height : "200px" , marginBottom : "10px"}}>
                                <img style={{width : "100%" ,height : "100%",borderRadius : '10px'}} src={img_6} alt="image8"/>
                        </div>      

                        <div className="centered">
                                        <button onClick={() => handleClick('6')} className="centered_btn" data-toggle="modal" data-target="#mypicDescriptionPage">
                                             <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
                                       </button> 
                           </div>                  
                </div>
            </div>

            <ModalPage image={images.e_Image}/>

        </div>
    </div>
     )
}
export default Portfolio;