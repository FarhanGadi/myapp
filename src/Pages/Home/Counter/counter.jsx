import React from "react";
import NumberCounter from "number-counter"
export default class Counter extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid pb-3">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-12 pt-5  d-flex justify-content-center">
                        <p style={{fontSize:"29px",letterSpacing:"-1px"}}><span style={{color:"orange"}}>Why You</span> Choose Us</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 pt-4">
                            <div className="container d-flex justify-content-center align-items-center flex-column">
                                <p style={{fontSize:"46px",color:"#EB7F1C"}} className="mb-0"> <NumberCounter  start={600} end={2600}/> </p>
                                <p style={{fontSize:"24px",color:"#002B46"}}>Students Successive</p>
                                <p style={{fontSize:"15px",color:"#717171", textAlign:"center"}}>Throughout these year we have done amazing work with 250 students..</p>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-4">
                            <div className="container d-flex justify-content-center align-items-center flex-column">
                                <p style={{fontSize:"46px",color:"#EB7F1C"}} className="mb-0"><NumberCounter  start={3000} end={5600}/></p>
                                <p style={{fontSize:"24px",color:"#002B46"}}>Competitions Won</p>
                                <p style={{fontSize:"15px",color:"#717171", textAlign:"center"}}>Only competitions were the ones in the back of the magazines you find..

</p>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-4">
                            <div className="container d-flex justify-content-center align-items-center flex-column">
                                <p style={{fontSize:"46px",color:"#EB7F1C"}} className="mb-0"><NumberCounter  start={6000} end={8600}/>
</p>
                                <p style={{fontSize:"24px",color:"#002B46"}}>Classes Visited
</p>
                                <p style={{fontSize:"15px",color:"#717171", textAlign:"center"}}>Can how you setup your classroom impact how students think...

</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}