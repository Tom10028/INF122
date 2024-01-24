import React from "react";
import '../styles/Tabs.css';
function Tabs(){
    return(
        <div className="tabs">
            <button className="tabs-background-item active">
                <p className="tabs-background-item-text">Portfolio</p>
            </button>
            <button className="tabs-background-item">
                <p className="tabs-background-item-text">Skills</p>
            </button>

        </div>

    );

}
export default Tabs;