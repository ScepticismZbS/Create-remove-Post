import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import { routes } from "../router";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default AppRouter