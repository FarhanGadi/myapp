import React from "react";
import "./style.css";
import {
  BsTelephone,
  BsWhatsapp,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { GrTwitter } from "react-icons/gr";
import img1 from "../assets/Training Institiue Images/img.jpg01.png";

export default class Nav extends React.Component {
  render() {
    return (
      <>
        <nav>
          <div className="container-fluid border py-2 nav1">
            <div className="container">
              <div className="row text-light d-flex justify-content-between">
                <div className="col-lg-4   ">
                  <span className=" ">
                    {" "}
                    <span>
                      {" "}
                      <BsTelephone />
                    </span>{" "}
                    +1800 326 3264{" "}
                  </span>
                  <span className="ml-3 ">
                    {" "}
                    <span className="mt-3 border">
                      <HiMail />
                    </span>{" "}
                    support@website.com
                  </span>
                </div>
                <div className="col-lg-4    d-flex justify-content-end  pr-5">
                  <span>
                    <BsFacebook />
                  </span>
                  <span className="pl-3">
                    <BsLinkedin />
                  </span>
                  <span className="pl-3">
                    <GrTwitter />
                  </span>
                  <span className="pl-3">
                    <BsWhatsapp />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* -----------------------NAVBAR---------------- */}

        <nav class="navbar navbar-expand-lg navbar-light bg-white border border-danger">
          <div className="container">
            <p className="navbar-brand border border-danger " href="#">
              <img src={img1} alt="" />
            </p>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse d-flex justify-content-end "
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav   w-100 d-flex justify-content-end border  border-danger">
                <li class="nav-item active">
                  <a class="nav-link text-dark" href="#">
                   <Link to="/"> Home </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item" style={{ textDecoration: "none" }}>
                  <a class="nav-link text-dark" href="#">
                        <Link to="about" >About Us</Link>
                    <span class="sr-only">(current)</span>
                  </a>{" "}
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    Events
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    <Link to="allcourse">All Courses</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    Pages
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
