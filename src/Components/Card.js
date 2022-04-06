import React from "react";

export default function Card(data){
    return(
        <div className="d-flex flex-row justify-content-center container-fluid ps-5 pt-5 pb-5 mb-3">
            <div className="card custom-card">
                <img src={data.img} className="card-img-top custom-card-img" alt="Experience Image"/>
                <div className="card-body custom-card-body">
                    <div className="d-flex">
                        <span><i className="bi bi-star-fill"/> &nbsp;</span>
                        <span>{data.rating} <span className="grey">({data.totalrating}) .</span>&nbsp;</span>
                        <span className="grey">{data.country}</span>
                    </div>
                    <p className="pt-2">{data.description}</p>
                    <p><span className="fw-bold">From {data.price}</span> / Person</p>
                </div>
            </div>
        </div>
    )
}
