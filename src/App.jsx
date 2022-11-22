import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Feed, VideoDetail, ChannelDetail, SearchDetail} from "./Components/index";
import Navbar from './Components/Navbar';
import {Box} from "@mui/material";
import Text from "./Components/Text"

const App = () => (
    <Box sx={{backgroundColor: "#000", minHeight: "100vh", width: "100vw"}}>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/test" element={<Text />} />
                <Route exact path="/" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchDetail />} />
            </Routes>
        </BrowserRouter>
    </Box>
)

export default App