import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Feed, VideoDetail, ChannelDetail, SearchDetail} from "./Components/index";
import Navbar from './Components/Navbar';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {Box} from "@mui/material";
import Text from "./Components/Text"
import Signup from './Components/Signup';
import Login from './Components/Login';
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from 'react';
import { saveUser } from './redux/slices/authSlice';
import PrivateRoute from './Components/PrivateRoute';
import { Navigate } from 'react-router-dom';

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.userData);
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                dispatch(saveUser(user.uid));
            }
            else {
                dispatch(saveUser(undefined));
            }
        })
    }, [auth, user]);
    return (
    <Box sx={{backgroundColor: "#000", minHeight: "100vh", width: "100vw"}}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={user ? <><Navbar /><Feed /></> : <Navigate to="/login" />} />
                <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                <Route path="/video/:id" element={user ? <><Navbar /><VideoDetail /></> : <Navigate to="/login" />} />
                <Route path="/channel/:id" element={user ? <><Navbar /><ChannelDetail /></> : <Navigate to="/login" />} />
                <Route path="/search/:searchTerm" element={user ? <><Navbar /><SearchDetail /></> : <Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    </Box>
    );
}
export default App