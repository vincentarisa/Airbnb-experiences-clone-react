import React from "react";
import airbnbimage from "../Images/airbnb.png"

export default function Navigation(){
    return(
        <div>
            <nav className="navbar navbar-light">
                <div className="container-fluid ps-4 pb-2 custom-head">
                    <a className="navbar-brand" href="#">
                        <img src={airbnbimage} alt="Airbnb Logo"/>
                    </a>
                </div>
            </nav>
        </div>
    )
}