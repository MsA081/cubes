
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../page/home"
import Auth from "../../page/Auth"
import Question from "../../page/Question"
import Logout from "../../page/Logout"

const Layout = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<><Home/></>}/>
                    <Route exact path="/login" element={<><Auth /></>}/>
                    <Route exact path="/logout" element={<><Logout /></>}/>
                    <Route path="/question" element={<><Question /></>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout;