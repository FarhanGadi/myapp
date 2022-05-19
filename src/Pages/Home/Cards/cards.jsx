import React from "react";
import "./cards.css"
import { FaBars } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
// import { FcSettings } from "react-icons/fc";
import { AiTwotoneSetting } from "react-icons/ai";

export default class Card extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid ">
            <div className="container ">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center py-5">
                            <p style={{fontSize:"25px",letterSpacing:"1px"}}><span style={{color:"orange"}}>Our</span> Expertise</p>
                        </div>
                  
                </div>
            </div>
            <div className="container">
                    <div className="row mt-3">
                        <div className="col-lg-4 ">
                          <div className="container">

                              <div className="row">
                                  <div className="col-12 text-center py-4 cardMain mb-5" style={{backgroundColor:"#F7F7F7"}}>
                                      <div className="circle">
                                         <span className="cardicon"> <FaBars/></span>  
                                      </div>
                                      <h4 className="mt-5"  >Learn courses online</h4>
                                      <div className="text-center " style={{width:"93%"}}>
                                      <p style={{fontSize:"15px",color:"grey"}}>Aliquam erat volutpat. Donec laoreet iaculis elementum. Aliquam ligula nisi, molestie faucibus tortor.</p>
                                      </div>
                                  </div>
                              </div>
                    
                      </div>
                        </div>
                        <div className="col-lg-4 ">
                        <div className="container">

                        <div className="row">
                                  <div className="col-12 text-center py-4 cardMain mb-5" style={{backgroundColor:"#F7F7F7"}}>
                                      <div className="circle">
                                         <span className="cardicon"><BsFillSuitHeartFill/></span>  
                                      </div>
                                      <h4 className="mt-5"  >Best industry experts</h4>
                                      <div className="text-center " style={{width:"93%"}}>
                                      <p style={{fontSize:"15px",color:"grey"}}>Nunc nec nisi vitae ipsum pharetra tincidunt. Nam vel purus dolor. In iaculis arcu et aliquam dapibus.</p>
                                  </div>
                                  </div>

                              </div>
                    
                    </div>
                        </div>
                        <div className="col-lg-4 ">
                        <div className="container">

                        <div className="row">
                                  <div className="col-12 text-center py-4 cardMain mb-5" style={{backgroundColor:"#F7F7F7"}}>
                                      <div className="circle">
                                         <span className="cardicon"> <AiTwotoneSetting/></span>  
                                      </div>
                                      <h4 className="mt-5"  >See our best skills</h4>
                                      <div className="text-center " style={{width:"93%"}}>
                                      <p style={{fontSize:"15px",color:"grey"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat mauris quis volutpat fermentum.</p>
                                  </div>
                                  </div>
                              </div>
                    
                    
                    </div>
                        </div>

                    </div>
            </div>
            </div>




            
{/* -----------------------------PRICING TABLE--------------------------- */}


            </>

        )
    }
}