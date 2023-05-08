import React from "react";

export class Header extends React.Component{
    render(){
        return(
                <div className="navbar navbar-light bg-light">
                    <div className="container">
                        <div className="navbar-brand">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
        }
}