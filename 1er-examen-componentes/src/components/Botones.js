import React from "react";
import '../styles/Botones.css';
function Botones(){
    return(
        <div className="buttons">
                <button className="btn-primary" onclick="download()">
                    <div class="btn-content">
                        <p>Download CV</p>
                        <img src={require('../icons/download.svg')} alt="arrow" className="btn-primary-img" />
                    </div>
                </button>
                <a className="btn-secondary" href="mailto:contact@me.com">
                    <div className="btn-content">
                        <p>Contact me</p>
                    </div>
                </a>
        </div>
    );
}
export default Botones;