import React from "react";
import "./pricing.css"
export default class Pricing extends React.Component{
    render(){
        return(
            <>
            
<div className="container-fluid">
<div className="container d-flex justify-content-center pt-5">
                <p style={{fontSize:"25px",letterSpacing:"",color:"black"}}><span style={{color:"orange"}}>Pricing</span> Table
                    </p>

                </div>
                <div className="container mb-3 ">
                   
                        
                   <div className="row">
                   <div className="col-lg-4 mt-5">
                        <div className="container d-flex justify-content-center flex-column align-items-center tbl_card">
                            <p className="table_para mt-5 mb-0">Starter</p>
                            <p style={{fontSize:"26px",fontWeight:"500"}} className="table_para1 mt-2"><sup>$</sup>10 <sub>/Mon</sub></p>
                            <hr className="hor1"/>
                            <p className="tbpra mt-1 mb-2">One Day Trial</p>
                            <p className="tbpra mb-2">Limited Courses</p>
                            <p className="tbpra mb-2">Free 3 Lessons</p>
                            <p className="tbpra mb-2">No Ebook</p>
                            <p className="tbpra mb-2">No Tutorial</p>
                            <p className="tbpra mb-1">Limited Registered User</p>
                            <hr className="hor1"/>
                            <button className="bttn py-1 px-4 my-4">Purchase Now</button>


                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="container d-flex justify-content-center flex-column align-items-center tbl_card">
                            <p className="table_para mt-5 mb-0">Basic</p>
                            <p style={{fontSize:"26px",fontWeight:"500"}} className="table_para1 mt-2"><sup>$</sup>20 <sub>/Mon</sub></p>
                            <hr className="hor1"/>
                            <p className="tbpra mb-1">One Day Standard Access</p>

                            <p className="tbpra mt-1 mb-2">One Day Trial</p>
                            <p className="tbpra mb-2">Limited Courses</p>
                            <p className="tbpra mb-2">Free 3 Lessons</p>
                            <p className="tbpra mb-2">Random Supporter</p>
                            <p className="tbpra mb-2">Standard Tutorials</p>
                            <hr className="hor1"/>
                            <button className="bttn py-1 px-4 my-4">Purchase Now</button>


                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="container d-flex justify-content-center flex-column align-items-center tbl_card">
                            <p className="table_para mt-5 mb-0">Premium</p>
                            <p style={{fontSize:"26px",fontWeight:"500"}} className="table_para1 mt-2"><sup>$</sup>30 <sub>/Mon</sub></p>
                            <hr className="hor1" style={{height:"height:1.3px"}}/>
                            <p className="tbpra mt-1 mb-2">One Day Trial</p>
                            <p className="tbpra mb-2">Limited Courses</p>
                            <p className="tbpra mb-2">Free 3 Lessons</p>
                            <p className="tbpra mb-2">No Ebook</p>
                            <p className="tbpra mb-2">No Tutorial</p>
                            <p className="tbpra mb-1">Limited Registered User</p>
                            <hr className="hor1"/>
                            <button className="bttn py-1  px-4 my-4">Purchase Now</button>


                        </div>
                
                   </div>
                </div>
            </div>
            </div>
            </>
        )
    }
}