import React from 'react'
import {Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchBar from './SearchBar';
const Navbar = () => (
    <Stack direction="row" sx={{padding: {xs: "10px 4px", sm: "12px 18px"}, zIndex: 1, position: "sticky", backgroundColor: "#161616", top: 0, justifyContent: "space-between", alignItems: "center"}}>
        <Link to="/">
            <Stack direction="row" sx={{alignItems: "center", color: '#fff'}}>
            <YouTubeIcon sx={{fontSize: {xs: "2.2rem", sm:"2.6rem"}, color: "red"}} />
            <Typography vaiant="h4" fontSize="0.1rem" sx={{fontSize: {xs: "1.1rem", sm: "1.3rem"}, color: "#fff", fontWeight: "bold", position: "relative"}}>YouTube<span style={{position: "absolute", top: "-1px", left: "100%", fontSize: "0.6rem", fontWeight: "600"}}>IN</span></Typography>
            </Stack>
        </Link>
        <SearchBar/>
    </Stack> 
)

export default Navbar