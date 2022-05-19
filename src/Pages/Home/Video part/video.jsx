import React from "react";
import ReactPlayer from "react-player/youtube";
export default class Player extends React.Component{
    render(){
        return(
            <>
                     
<div className="container-fluid cont2 pb-5">
                <div className="container">
                    <div className="row pt-1 ">
                        <div className="col-lg-12 d-flex justify-content-center pt-5">
                        <p style={{fontSize:"31px",letterSpacing:"-1px",color:"white"}}><span style={{color:"orange"}}>Take A</span> Video Tour
</p>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="container pt-5">
                            <div className="player-wrapper" style={{height:"400px" ,position:"relative"}}>
                                <ReactPlayer url="https://youtu.be/VmEU22NYkEs?list=RDsQxp13k_8IU" width="100%" height="100%" style={{positon:"absolute"}}>


                                </ReactPlayer>


                                  
                            </div>


                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="container pt-5">
                        <p style={{fontSize:"23px",letterSpacing:"2px",color:"white"}}>Daily Life Of Studying At Training Institute</p>
                                <p style={{color:"white"}}>Nam cursus imperdiet elit. Fusce sollicitudin eget nulla in condimentum. Nullam dignissim id magna non tempus. Vivamus molestie nulla nec pharetra dignissim. Suspendisse auctor nisi et neque vehicula pulvinar. Quisque quis tempus magna. Quisque sed luctus nunc sapien.</p>
                            </div>
                            <button className="py-2 px-3 text-light ml-3" style={{border:"none",backgroundColor:"#EB7F25",borderRadius:"5px"}}>See More</button>
                        </div>  
                        
                    </div>
                </div>
            </div>
            </>
        )
    }
}