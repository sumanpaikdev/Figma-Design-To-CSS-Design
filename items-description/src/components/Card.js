import React from "react";

export default function Card(props) {
    return(
        <div className="card--container">
            <div className="left">
                <img src={props.pic}  />
            </div>
            <div className="right">
                <div className="first">
                    <p className="left--span">PRODUCTIVITY</p>
                    <p className="right--span">3 days ago</p>
                </div>
                <div className="second">
                    <h1 className="heading">7 Skills of Highly Effective Programmers</h1>
                    <p className="description">Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...  </p>
                </div>
                <div className="third">
                    <span className="name">Glen Williams</span>
                    <span className="readMore">Read More &rarr;</span>
                </div>
            </div>
        </div>
    );
}