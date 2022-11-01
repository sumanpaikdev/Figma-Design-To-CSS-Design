import React from "react";

export default function Card(props) {
    return(
        <div className="card--container">
            <div className="left">
                <img src={props.details.picture}  />
            </div>
            <div className="right">
                <div className="first">
                    <p className="left--span">{props.details.status}</p>
                    <p className="right--span">{props.details.timecount}</p>
                </div>
                <div className="second">
                    <h1 className="heading">{props.details.title}</h1>
                    <p className="description">{props.details.description}</p>
                </div>
                <div className="third">
                    <span className="name">{props.details.name}</span>
                    <span className="readMore">Read More &rarr;</span>
                </div>
            </div>
        </div>
    );
}