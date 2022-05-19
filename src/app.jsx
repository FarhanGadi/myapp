import React from "react";
import Nav from "./Navbar/navbar1"
import Home from "./Pages/Home/home"
import About from "./Pages/About US/about";
import AllCourse from "./Pages/All Courses/input/input";
import { Route,Routes } from "react-router-dom";
// import MainInput from "./Pages/All Courses/input/input"

export default class App extends React.Component{
    render(){
        return(
            <>
            <Nav/> 
           
           <Routes>
            <Route path="/" element={<Home/>}>  </Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="allcourse" element={<AllCourse/>} ></Route>
           </Routes>

        
            </>
        )
    }
}