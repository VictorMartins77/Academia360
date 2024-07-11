import { Routes, Route } from 'react-router-dom';
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn/SignIn";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp/>} />
        </Routes>
    );
}