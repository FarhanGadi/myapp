import React from "react";
import "./slider.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Img1 from "../assets/Training Institiue Images/img.jpg06.jpg"

export default class Slider extends React.Component{
    render(){
        return(
            <>
              <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide1 d-flex justify-content-center align-items-center">
          <div className=" col-9 mt-5   d-flex justify-content-center align-items-center flex-column text-light text-center">         
             <h2 style={{fontSize:"40px"}}>Education is not preparation for life Education is life itself</h2>
             <button className="btn mt-4 px-4" style={{backgroundColor:"#EB7F25",color:"white",fontWeight:"bold"}}>See More</button>
          </div>

        </SwiperSlide>
        <SwiperSlide className="slide2 d-flex justify-content-center align-items-center">
        <div className=" col-9 mt-5  d-flex justify-content-center align-items-center flex-column text-light text-center">         
       <h2>Develop a passion for learning. if you do, you will never cease to grow</h2>   
             <h2 style={{fontSize:"40px"}}></h2>
             <button className="btn mt-4 px-4" style={{backgroundColor:"#EB7F25",color:"white",fontWeight:"bold"}}>See More</button>
          </div>
        </SwiperSlide>
      </Swiper>
            </>
        )
    }
}