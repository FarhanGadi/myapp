import React from "react";
import "./header.css"
import  Slider1 from "../Slider1/slider1"
import Slider2 from "../slider2/slider2"
import img2 from "../../../assets/Training Institiue Images/img.jpg03.jpg"  
import Card from "../Cards/cards"
import Footer from "../Footter/footter"
import Counter from "../Counter/counter"
import Player from "../Video part/video"
import Pricing from "../Pricing Table/pricing";

export default class Header extends React.Component{
    render(){
        return<>
            <div className="container-fluid cont1 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6  mt-4 d-flex justify-content-center">
                            <div className="cont my-5 pt-3 pb-3 card1 d-flex justify-content-center align-items-center flex-column  " style={{borderRadius:"4px"}}>
                                <p className="pra mt-4">Enroll Now</p>
                                <input placeholder="name" className="py-2 px-3 mt-4" style={{width:"78%",border:"none", borderRadius:"2px"}}></input>
                                <input placeholder="email" className="py-2 px-3 mt-4" style={{width:"78%",border:"none", borderRadius:"2px"}}></input>
                                <input placeholder="Mobile Number" className="py-2 px-3 mt-4" style={{width:"78%",border:"none", borderRadius:"2px"}}></input>
                                <input placeholder="Course Type" className="py-2 px-3 mt-4"   style={{width:"78%",border:"none", borderRadius:"2px"}}></input>
                                <button className="py-2 px-3 mt-4 mb-5" style={{width:"78%",border:"none", borderRadius:"2px",backgroundColor:"#002B46",color:"white"}}>Submit</button>


                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <img src={img2} className="mt-5"></img>
                        </div>

                    </div>
                   
                </div>
            </div>
           
      <Card/>
      <Player/>
        <Counter/>
        <Slider1/>
        <Pricing />
        <Footer/>

        </>
    }
}