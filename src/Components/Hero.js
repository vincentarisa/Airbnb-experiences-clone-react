import React from "react";
import profpic from "../Images/profpic.png";

export default function Hero(){
    return(
        <div>
            <div className="container-fluid d-flex justify-content-center p-5">
                <img src={profpic} className="prof-pic" alt="Airbnb Logo"/>
            </div>

            <div className="container-fluid ps-4 pt-3">
                <h1 className="fw-bold">Online Experiences</h1>
                <p className="ps-2">
                    Join unique interactive activities led by one of a kind hosts all without leaving home.
                </p>
            </div>
        </div>
    )
}