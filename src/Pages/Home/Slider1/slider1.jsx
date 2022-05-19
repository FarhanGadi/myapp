import React from "react";
import "./slider1.css"

    import { Swiper, SwiperSlide } from "swiper/react";
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import {   MdOutlineAdminPanelSettings} from "react-icons/md";

export default class Slider1 extends React.Component{
    render(){
        return(
            <>
            <div className="pb-1"  style={{backgroundColor:"#F7F7F7"}}>
            <div className="container pb-3">
                    <div className="row">
                        <div className="col-lg-12 pt-5   d-flex justify-content-center">
                        <p style={{fontSize:"29px",letterSpacing:"1px"}}> <span style={{color:"orange"}}>Recent Added </span>Courses</p>
                           

                        </div>
                    </div>
                    </div>

                  <Swiper

                  
        slidesPerView={5}
        spaceBetween={20}
        slidesPerGroup={1}
                centeredSlides={true}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
               
                navigation={true}
                modules={[Autoplay,  Navigation]}
        className="mySwiper autoSlider mb-5" style={{border:"none",borderRadius:"10px"}}
      >
        <SwiperSlide className="slideCard">
            <div className="IMG1" style={{height:"60%"}}></div>
            <div className="d-flex  flex-column">
            <span className=" mt-3 pb-2 ml-3 " style={{letterSpacing:"2px",fontSize:"17px"}}>Learning Seminar</span>
            <hr style={{width:"90%"}} className="mt-0 mb-0 my-0"/>
            <span className=" d-flex ml-3 align-items-center mt-1"> <span style={{fontSize:"30px"}}>< MdOutlineAdminPanelSettings/></span>   Traininginstitute</span>
            <hr style={{width:"90%"}} className="mt-0"/>
            <div className=" w-100  d-flex justify-content-end ">
            <span className=" d-flex flex-end mr-3 ">$300.00</span>
            </div>
              
                </div>
        </SwiperSlide>
        <SwiperSlide className="slideCard">
        <div className="IMG2" style={{height:"60%"}}></div>
            <div className="d-flex  flex-column">
            <span className=" mt-3 pb-2 ml-3 " style={{letterSpacing:"2px",fontSize:"17px"}}>Learning Seminar</span>
            <hr style={{width:"90%"}} className="mt-0 mb-0 my-0"/>
            <span className=" d-flex ml-3 align-items-center mt-1"> <span style={{fontSize:"30px"}}>< MdOutlineAdminPanelSettings/></span>   Traininginstitute</span>
            <hr style={{width:"90%"}} className="mt-0"/>
            <div className=" w-100  d-flex justify-content-end ">
            <span className=" d-flex flex-end mr-3 ">Free</span>
            </div>
            </div>
              
        </SwiperSlide>
        <SwiperSlide className="slideCard">
        <div className="IMG3" style={{height:"60%"}}></div>
            <div className="d-flex  flex-column">
            <span className=" mt-3 pb-2 ml-3 " style={{letterSpacing:"2px",fontSize:"17px"}}>Learning Seminar</span>
            <hr style={{width:"90%"}} className="mt-0 mb-0 my-0"/>
            <span className=" d-flex ml-3 align-items-center mt-1"> <span style={{fontSize:"30px"}}>< MdOutlineAdminPanelSettings/></span>   Traininginstitute</span>
            <hr style={{width:"90%"}} className="mt-0"/>
            <div className=" w-100  d-flex justify-content-end ">
            <span className=" d-flex flex-end mr-3 ">$50.00</span>
            </div>
            </div>


              
        </SwiperSlide>
        <SwiperSlide className="slideCard">
        <div className="IMG4" style={{height:"60%"}}></div>
            <div className="d-flex  flex-column">
            <span className=" mt-3 pb-2 ml-3 " style={{letterSpacing:"2px",fontSize:"17px"}}>Learning Seminar</span>
            <hr style={{width:"90%"}} className="mt-0 mb-0 my-0"/>
            <span className=" d-flex ml-3 align-items-center mt-1"> <span style={{fontSize:"30px"}}>< MdOutlineAdminPanelSettings/></span>   Traininginstitute</span>
            <hr style={{width:"90%"}} className="mt-0"/>
            <div className=" w-100  d-flex justify-content-end ">
            <span className=" d-flex flex-end mr-3 ">Free</span>
            </div>
            </div>


              
        </SwiperSlide>
        <SwiperSlide className="slideCard">
        <div className="IMG5" style={{height:"60%"}}></div>
            <div className="d-flex  flex-column">
            <span className=" mt-3 pb-2 ml-3 " style={{letterSpacing:"2px",fontSize:"17px"}}>Learning Seminar</span>
            <hr style={{width:"90%"}} className="mt-0 mb-0 my-0"/>
            <span className=" d-flex ml-3 align-items-center mt-1"> <span style={{fontSize:"30px"}}>< MdOutlineAdminPanelSettings/></span>   Traininginstitute</span>
            <hr style={{width:"90%"}} className="mt-0"/>
            <div className=" w-100  d-flex justify-content-end ">
            <span className=" d-flex flex-end mr-3 ">$500.00</span>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slideCard">
        <div className="IMG6" style={{height:"60%"}}></div>
            <div className="d-flex  flex-column">
            <span className=" mt-3 pb-2 ml-3 " style={{letterSpacing:"2px",fontSize:"17px"}}>Learning Seminar</span>
            <hr style={{width:"90%"}} className="mt-0 mb-0 my-0"/>
            <span className=" d-flex ml-3 align-items-center mt-1"> <span style={{fontSize:"30px"}}>< MdOutlineAdminPanelSettings/></span>   Traininginstitute</span>
            <hr style={{width:"90%"}} className="mt-0"/>
            <div className=" w-100  d-flex justify-content-end ">
            <span className=" d-flex flex-end mr-3 ">Free</span>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slideCard">
        <div className="IMG7" style={{height:"60%"}}></div>
            <div className="d-flex  flex-column">
            <span className=" mt-3 pb-2 ml-3 " style={{letterSpacing:"2px",fontSize:"17px"}}>Learning Seminar</span>
            <hr style={{width:"90%"}} className="mt-0 mb-0 my-0"/>
            <span className=" d-flex ml-3 align-items-center mt-1"> <span style={{fontSize:"30px"}}>< MdOutlineAdminPanelSettings/></span>   Traininginstitute</span>
            <hr style={{width:"90%"}} className="mt-0"/>
            <div className=" w-100  d-flex justify-content-end ">
            <span className=" d-flex flex-end mr-3 ">$300.00</span>
            </div>
            </div>
        </SwiperSlide>
        
      </Swiper> 
      </div>
            </>
        )
    }
}