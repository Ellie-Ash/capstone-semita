import React from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Tracker from "./components/Tracker"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"



ReactDOM.render(
<Router>
    <Tracker />
</Router>,
document.getElementById('root'));