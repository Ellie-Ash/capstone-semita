import React, { Component } from "react"
import { Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"




export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Route render={({ history}) => (
                <h1 className="MainTitle" onClick={()=> history.push("/home")}> Semita </h1>
                )}/>

                <div className="UserDropdown">
                   <div className="DropdownBtn">
                   <h2>≡</h2>
                   </div>
                        <div className="DropdownContent">
                        <a href="/goals">My Goals</a>
                        <a href="/progress">My Progress</a>
                        <button className="LogoutBtn btn btn-primary">
                        <a href="/login">Logout</a>
                        </button>
                        </div>        
                </div>
                <hr></hr>
            </div>
        )
    }
}
