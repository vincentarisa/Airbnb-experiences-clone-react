import React from "react";

export default function Card(props){
    return(
        <div className="d-flex flex-row justify-content-center container-fluid ps-5 pt-5 pb-5 mb-3">
            <div className="card custom-card">
                <img src={props.img} className="card-img-top custom-card-img" alt="Experience Image"/>
                <div className="card-body custom-card-body">
                    <div className="d-flex">
                        <span><i className="bi bi-star-fill"/> &nbsp;</span>
                        <span>{props.rating} <span className="grey">({props.totalrating}) .</span>&nbsp;</span>
                        <span className="grey">{props.country}</span>
                    </div>
                    <p className="pt-2">{props.description}</p>
                    <p><span className="fw-bold">From {props.price}</span> / Person</p>
                </div>
            </div>
        </div>
    )
}
