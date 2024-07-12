import { Routes, Route } from 'react-router-dom';
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/home/index";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    );
}