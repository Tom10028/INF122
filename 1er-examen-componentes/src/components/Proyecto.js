import React from "react";
import '../styles/Proyecto.css';
function Proyecto(){
    return(
        <div className="project-container">
                <div className="content-card-img">
                    <img className="image" src={require("../images/Hero_2.png")} alt="hero" />
                    <div className="content-card-img-overlay"></div>
                    <div className="content-card-img-detail">
                        <p className="title">SmarterTrading411</p>
                        <p className="detail">Landing page of SmarterTrading411 created using WordPress</p>
                        <button className="btn">
                            <img src={require('../icons/link.svg')} alt="link" />
                        </button>
                    </div>
                </div>
                <div className="content-card-img">
                    <img className="image" src={require("../images/bussiness_man.png")} alt="bussinesman"/>
                    <div className="content-card-img-overlay"></div>
                </div>
                <div className="content-card-img">
                    <img className="image grayscale" src={require("../images/pictures_wall.jpeg")} alt="pictures wall"/>
                    <div className="content-card-img-overlay"></div>
                </div>
                <div className="content-card-img">
                    <img className="image" src={require("../images/kitchen.jpeg")} alt="kitchen"/>
                    <div className="content-card-img-overlay"></div>
                </div>
                <div className="content-card-img">
                    <img className="image" src={require("../images/mobile_app.png")} alt="mobile"/>
                    <div className="content-card-img-overlay"></div>
                </div>
                <div className="content-card-img">
                    <img className="image grayscale" src={require("../images/issima_page.png")} alt="issima-page"/>
                    <div className="content-card-img-overlay"></div>
                </div>
        </div>
        
    );
}
export default Proyecto;