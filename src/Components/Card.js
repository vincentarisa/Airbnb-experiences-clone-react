import React from "react";
import swim from "../Images/swim.png"
import wedding from "../Images/wedding.png"
import bike from "../Images/bike.png"

export default function Card(){
    return(
        <div className="row d-flex justify-content-center pb-5 pt-5">
            <div className="col-3">
                <div className="card custom-card">
                    <img src={swim} className="card-img-top custom-img" alt="Bike"/>
                    <div className="card-body">
                        <span className="rating-span"><i className="bi bi-star" /> 5.0 <span className="grey">(6) . USA</span></span>
                        <p className="custom-p">Life lessons with Katie Zaferes</p>
                        <p className="price-p"><strong className="fw-bold">From $136</strong>/ person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
