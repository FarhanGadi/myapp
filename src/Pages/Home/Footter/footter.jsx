import React from "react";
import "./footter.css"
import IMG5 from "../../../assets/Training Institiue Images/img.jpg01.png"
import { BsTelegram} from "react-icons/bs";
import { BsFillTelephoneFill,BsMailbox,BsFacebook,BsLinkedin,BsTwitter,BsWhatsapp} from "react-icons/bs";


 export default class Footer extends React.Component{
     render(){
         return<>
            <div className="container-fluid footer_cont mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 pt-3">
                        <h3 className="pt-5 text-center" style={{letterSpacing:"1px"}}>Let us inform you about everything important directly.</h3>         
                        </div>
                        </div>
                        <div className="row d-flex justify-content-center pt-4 pb-5">
                            <div className="col-lg-6">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control footer_input" placeholder="Enter Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary pt-2 pb-0 px-4 btn_inp" type="button" style={{fontSize:"16px",color:"white"}}><span style={{fontSize:"27px"}}><BsTelegram   /></span></button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid footer_cont1">
                    <div className="container">
                       <div className="row pb-4">
                       <div className="col-lg-3 pt-5 pb-3">
                            <img src={IMG5}></img>
                            <p className="mt-4" style={{fontSize:"15px"}}>
                            Training Institute is an outstanding HTML template targeting educational institutions, helping them establish strong identity on the internet without any real developing knowledge
                               </p>
                        </div>
                        <div className="col-lg-3 pt-5  pl-4">
                            <p style={{fontSize:"24px",color:"#002B46"}}>Connect With Us</p>
                            <ul style={{listStyle:"none"}}>
                                <li className="pt-0 mt-3" style={{color:"#002B46", fontSize:"15px"}}><span className="pr-3" style={{color:"#EB7F1C"}}><BsFacebook/></span>Facebook</li>
                                <li className="pt-0 mt-1"><span className="pr-3" style={{color:"#EB7F1C"}}><BsTwitter/></span>Twitter</li>
                                <li className="pt-0 mt-1"><span className="pr-3" style={{color:"#EB7F1C"}}><BsLinkedin/></span>Linkedin</li>
                                <li className="pt-0 mt-1"><span className="pr-3" style={{color:"#EB7F1C"}}><BsWhatsapp/></span>Whatsapp</li>


                            </ul>
                            
                        </div>
                        <div className="col-lg-3 pt-5  pl-4">
                            <p style={{fontSize:"24px",color:"#002B46"}}>Quick Links</p>
                            <ul style={{listStyle:"none"}}>
                                <li className="pt-0 mt-3" style={{color:"#002B46", fontSize:"15px"}}>Become A Teacher</li>
                                <li className="pt-0 ">All Courses</li>
                                <li className="pt-0">Profile</li>
                                <li className="pt-0 ">Checkout</li>
                                <li className="pt-0 ">Login As A Tearch
</li>
                          
                            </ul>
                            
                        </div>
                        <div className="col-lg-3 pt-5  pl-4">
                            <p style={{fontSize:"24px",color:"#002b46"}}>Find Us</p>
                            <ul style={{listStyle:"none"}}>
                                <li className="pt-0 mt-3" style={{color:"#002b46", fontSize:"15px"}}><span className="pr-3" style={{color:"#EB7F1C"}}><BsFacebook/></span>143 Gordon Terrace BASSINGTHORPE NG33 0ZT United Kingdom</li>
                                <li className="pt-0 mt-2"><span className="pr-1" style={{color:"#EB7F1C"}}><BsTwitter/></span>info@traininginstitute.com public@traininginstitute.com</li>
                                <li className="pt-0 mt-2"><span className="pr-3" style={{color:"#EB7F1C"}}><BsFillTelephoneFill/></span>+1800 326 3264</li>


                            </ul>
                            
                        </div>
                       </div>
                       <hr/>
                       <div className="container d-flex justify-content-center py-2">
                           <p  style={{color:"#002b46;"}}>© Copyright 2017, All Rights Reserved <span style={{color:"orange"}}>TRAINING INSTITUTE </span> </p>
                       </div>
                    </div>
                </div>
         </>
     }
 }